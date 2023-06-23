import React, { useContext, useRef, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import HoverContext from "../context/HoverContext";
import axios from "axios";

const MainAdmin = () => {
  const authContext = useContext(AuthContext);
  const hoverContext = useContext(HoverContext);
  const [allHeroes, setAllHeroes] = useState([]);
  const [allHeroesToEdit, setAllHeroesToEdit] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillCount, setSkillCount] = useState(0);
  const [isloading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isCreateNewExpanded, setIsCreateNewExpanded] = useState(false);

  useEffect(() => {
    getHeroes();
  }, []);

  const onClickCreateNew = () => {
    setIsCreateNewExpanded(!isCreateNewExpanded);
    setEditMode(false);
  };
  const apiAddress =
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json";
  let heroNameRef = useRef();
  let heroRolesRef = useRef();
  let heroBiographyRef = useRef();
  let heroImageRef = useRef();
  let skillNameRef = useRef([]);
  let skillDescriptionRef = useRef([]);
  let skillImageRef = useRef([]);

  const getHeroes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiAddress);
      const data = response.data;
      let heroesData = [];
      for (let key in data) {
        heroesData.push({ ...data[key], id: key });
      }
      setAllHeroes(heroesData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const addNewSkill = () => {
    const newSkill = {
      skillName: "",
      skillDescription: "",
      skillImage: ""
    };
    setSkills(prevSkills => [...prevSkills, newSkill]);
    setSkillCount(prevCount => prevCount + 1);
  };
  const onSubmitHero = async event => {
    event.preventDefault();
    const heroSkills = skills.map((_, index) => ({
      skillName: skillNameRef.current[index].value,
      skillDescription: skillDescriptionRef.current[index].value,
      skillImage: skillImageRef.current[index].value
    }));
    let hero = {
      heroName: heroNameRef.current.value,
      heroRoles: heroRolesRef.current.value,
      heroBiography: heroBiographyRef.current.value,
      heroImage: heroImageRef.current.value,
      skills: heroSkills
    };
    if (!editMode) {
      try {
        await axios.post(apiAddress, hero);
        heroNameRef.current.value = "";
        heroRolesRef.current.value = "";
        heroBiographyRef.current.value = "";
        heroImageRef.current.value = "";
        skillNameRef.current.value = "";
        skillDescriptionRef.current.value = "";
        skillImageRef.current.value = "";
        setSkillCount(0);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .put(
            "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero/" +
              allHeroesToEdit.id +
              ".json",
            hero
          )
          .then(console.log("update Success"));
        // await getHeroes()
        setSkillCount(0);
      } catch (error) {
        // Handle error case here
        console.log(error);
      }
    }
    getHeroes();
  };
  const onClickEdit = (event, hero) => {
    setEditMode(true);
    setAllHeroesToEdit(hero);
    setSkills(hero.skills || []);
    setSkillCount(hero.skills ? hero.skills.length : 0);
  };
  authContext.isLoggedin = true;
  if (authContext.isLoggedin) {
    return (
      <div
        className="bg-[#ece8e1] mt-[75px] min-w-screen flex flex-col overflow-hidden font-bebasNeue relative p-3"
        style={{ height: "calc(100vh - 75px)" }}
      >
        <section id="CRUD-Forms" className="w-full">
          <div
            className="flex items-center justify-center w-[full] h-[65px] border-red-500 border border-opacity-60 px-2"
            onClick={() => {
              onClickCreateNew();
              onClickEdit;
            }}
          >
            <button className="rounded-sm w-full h-[50px] bg-red-500 text-2xl text-[#ffffff]">
              + NEW DATA
            </button>
          </div>

          {/* expand form */}
          {isCreateNewExpanded || editMode ? (
            <div className="w-full h-[490px] bg-[#0f1923] mt-[8px] flex">
              <div className="w-1/3 h-full bg-[#0f1923]  border-2 border-r-0 border-white p-16">
                <div className="flex items-center justify-center w-[full] h-[65px] border-white border border-opacity-60 px-2">
                  <button className="rounded-sm w-full h-[50px] bg-red-500 text-2xl text-[#ffffff]">
                    + NEW Hero
                  </button>
                </div>
                <div className="flex items-center justify-center w-[full] h-[65px] border-white border border-opacity-60 px-2 my-5">
                  <button className="rounded-sm w-full h-[50px] bg-[#0f1923] text-2xl text-red-50 border border-red-500">
                    + NEW Emblem
                  </button>
                </div>
                <img src="/img/redLogo.png" className="mt-5" />
              </div>

              <form
                className="flex-col w-2/3 h-full bg-white border-2 border-[#0f1923] border-l-0 px-8 py-2 flex overflow-x-hidden overflow-y-auto"
                type="button"
                onSubmit={onSubmitHero}
              >
                <div className="w-full h-full p-2">
                  <div className="w-full h-fit text-4xl flex">
                    <p className="w-1/2"> ADD New HERO </p>
                    <span className="w-1/2 flex justify-end"
                    onClick={onClickCreateNew}>
                      <img
                        className="bg-[#0f1923] border-2 border-[#0f1923] p-1 rounded-sm cursor-pointer"
                        src="/img/close.png"
                      />
                    </span>
                  </div>

                  <label>Hero Name</label>
                  <div className="w-full mb-2">
                    <input
                      className="w-full h-[35px] py-1 px-2 px-ss2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                      type="text"
                      ref={heroNameRef}
                      defaultValue={editMode ? allHeroesToEdit.heroName : ""}
                    />
                  </div>
                  <label>Roles</label>
                  <div className="w-full mb-2">
                    <input
                      className="w-full h-[35px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                      type="text"
                      ref={heroRolesRef}
                      defaultValue={editMode ? allHeroesToEdit.heroRoles : ""}
                    />
                  </div>
                  <label>Biography</label>
                  <div className="w-full mb-1">
                    <textarea
                      className="whitespace-normal overflow-auto w-full h-[80px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                      style={{ resize: "none" }}
                      ref={heroBiographyRef}
                      defaultValue={
                        editMode ? allHeroesToEdit.heroBiography : ""
                      }
                    ></textarea>
                  </div>
                  <label>Image Url</label>
                  <div className="w-full mb-2">
                    <input
                      className="text-left w-full h-[35px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                      type="text"
                      ref={heroImageRef}
                      defaultValue={editMode ? allHeroesToEdit.heroImage : ""}
                    />
                  </div>
                  <div className="w-full h-full">
                    <div className="flex items-center justify-center w-full h-[60px]">
                      <button
                        className="rounded-sm w-full h-[40px] bg-[#0f1923] text-xl text-[#ffffff]"
                        onClick={addNewSkill}
                        type="button"
                      >
                        + Skill
                      </button>
                    </div>

                    {/* skills = [{a,b,c},{a,b,c}, ....] */}
                    {skills.map((_, index) => (
                      <div className="w-full flex mb-3" key={index}>
                        <div className="w-fit">
                          <div className="w-fit">
                            <label className="">Nama Keterampilan</label>
                            <div className="w-full mb-1">
                              <input
                                className="w-[225px] h-full py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                                type="text"
                                ref={el => (skillNameRef.current[index] = el)}
                                defaultValue={
                                  editMode
                                    ? allHeroesToEdit.skills[index].skillName
                                    : ""
                                }
                              />
                            </div>
                          </div>

                          <div className="w-fit">
                            <label className="w-fit">Gambar Keterampilan</label>
                            <div className="w-full mb-1">
                              <input
                                className="w-[225px] h-full py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                                type="text"
                                ref={el => (skillImageRef.current[index] = el)}
                                defaultValue={
                                  editMode
                                    ? allHeroesToEdit.skills[index].skillImage
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 w-2/3">
                          <label className="">Deskripsi Kemampuan</label>

                          <div className="w-full mb-1">
                            <textarea
                              className="whitespace-normal overflow-auto w-full h-[88px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                              style={{
                                resize: "none"
                              }}
                              ref={el =>
                                (skillDescriptionRef.current[index] = el)
                              }
                              defaultValue={
                                editMode
                                  ? allHeroesToEdit.skills[index]
                                      .skillDescription
                                  : ""
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center justify-center w-[205px] h-[60px] border-red-500 border border-opacity-60 mb-4">
                      <button className="rounded-sm w-[190px] h-[45px] bg-red-500 text-xl text-[#ffffff]">
                        {editMode ? "Update" : "Create"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}

          {/* Table Section */}
        </section>
        {!isloading && (
          <section
            id="data-table"
            className="bg-[#0f1923] w-full h-fit mt-2 border-2 text-white overflow-x-hidden overflow-y-auto"
          >
            <table className="w-full">
              <thead className="border-2 bg-red-500 border-[#0f1923] text-[#0f1923] text-xl">
                <tr>
                  {[
                    "no.",
                    "hero",
                    "roles",
                    "biography",
                    "img",
                    "skill",
                    "option"
                  ].map((data, index) => {
                    return (
                      <th
                        key={index}
                        className="py-2 px-4 border-x-2 border-[#0f1923]"
                      >
                        {data}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="border-x-2">
                {allHeroes.map((hero, index) => {
                  return (
                    <tr className="border-y-2 border-[#343f44]" key={index}>
                      <td className="py-2 px-4 border-x-2 border-[#343f44] w-[3px] text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 border-x-2 border-[#343f44] w-32 text-center">
                        {hero.heroName}
                      </td>
                      <td className="py-2 px-4 border-x-2 border-[#343f44] w-28 text-center">
                        {hero.heroRoles}
                      </td>
                      <td className="py-2 px-4 border-x-2 border-[#343f44] max-w-[250px]">
                        {hero.heroBiography}
                      </td>
                      <td className="py-2 px-4 border-x-2 border-[#343f44]">
                        {hero.heroImage}
                      </td>
                      <td className="py-2 px-4 border-x-2 border-[#343f44]">
                        {hero.skills?.map((skill, skillIndex) => (
                          <div key={skillIndex} className="py-2 px-4">
                            <p>Skill {skillIndex + 1}</p>
                            <p>Skill Name: {skill.skillName}</p>
                            <p>Skill Description: {skill.skillDescription}</p>
                            <p>Skill Image: {skill.skillImage}</p>
                          </div>
                        ))}
                      </td>
                      <td className="border-x-2 border-[#343f44]">
                        <div className="flex justify-center items-center">
                          <button
                            className="rounded-sm w-[60px] h-[25px] bg-[#0f1923] text-md text-white border border-red-500"
                            onClick={event => onClickEdit(event, hero)}
                          >
                            Edit
                          </button>
                          <button className="rounded-sm w-[60px] h-[25px] bg-red-500 text-md text-white border border-red-500 ml-2">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        )}
        {isloading && <p>loading....</p>}
      </div>
    );
  }
};

export default MainAdmin;
