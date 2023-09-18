import React, { useContext, useRef, useState, useEffect } from "react";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import AuthContext from "../context/AuthContext";
import HoverContext from "../context/HoverContext";
import axios from "axios";
import {
  ButtonOption,
  ButtonDelete,
  ButtonNewSkill
} from "./tableData/ButtonOption";
import { NotifyAction } from "./NotifyAction";

const MainAdmin = () => {

  const authContext = useContext(AuthContext);
  const hoverContext = useContext(HoverContext);

  // const [allHeroes, setAllHeroes] = useState([]);
  // const [allHeroesToEdit, setAllHeroesToEdit] = useState(null);
  // const [skills, setSkills] = useState([]);
  // const [skillCount, setSkillCount] = useState(0);
  // const [isloading, setIsLoading] = useState(false);
  // const [imageName, setImageName] = useState();

  const [isDelete, setIsDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isCreateNewExpanded, setIsCreateNewExpanded] = useState(false);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [textSuccessMessage, setTextSuccessMessage] = useState("");
  const [imageUpload, setImageUpload] = useState();
  const [changeFileMode, setChangeFileMode] = useState(false);
  const [heroImageRef, setHeroImageRef] = useState();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      authContext.setIsLoggedIn(true);
    } else {
      authContext.setIsLoggedIn(false);
    }
    getHeroes();
  }, []);

  const onchangeFileMode = () => {
    setChangeFileMode(true);
  };

  const onUploadImage = event => {
    setImageUpload(event.target.files[0]);
    setImageName("images/hero/" + event.target.files[0].name);
  };

  const UploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/hero/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => alert("upload success")).then(()=>{
      getDownloadURL(imageRef)
    }).then((url)=>{
      set
    })
  };

  // const onClickCreateNew = () => {
  //   setIsCreateNewExpanded(!isCreateNewExpanded);
  //   setEditMode(false);
  // };
  const apiAddress =
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json";
  let heroNameRef = useRef();
  let heroRolesRef = useRef();
  let heroBiographyRef = useRef();
  let skillNameRef = useRef([]);
  let skillDescriptionRef = useRef([]);
  let skillImageRef = useRef([]);

  //perlu Context
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

  const removeSkill = () => {
    if (skills.length === 0) {
      return; // Jika tidak ada skill yang tersedia, keluar dari fungsi
    }

    const updatedSkills = [...skills]; // Membuat salinan array skills
    updatedSkills.pop(); // Menghapus skill terakhir dari array

    setSkills(updatedSkills); // Mengupdate state skills dengan array skill yang telah diperbarui
    setSkillCount(prevCount => prevCount - 1); // Mengupdate skill count dengan mengurangi 1
  };

  const onDeleteHero = async (event, hero) => {
    if (isDelete === true) {
      try {
        await axios.delete(
          "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero/" +
            hero.id +
            ".json"
        );

        await getHeroes(); // Menunggu hingga getHeroes() selesai

        setShowSuccessMessage(true);
        setTextSuccessMessage("Delete Success");
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);

        setIsDelete(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Do something else
    }
  };

  const onClickClose = () => {
    setEditMode(false);
    setIsCreateNewExpanded(false);
  };

  const onUnDelete = () => {
    setIsDelete(false);
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
      heroImage: imageName,
      skills: heroSkills
    };
    if (!editMode) {
      try {
        await axios.post(apiAddress, hero).then(() => {
          UploadImage();
          setShowSuccessMessage(true);
          setTextSuccessMessage("Create Success");
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        });

        heroNameRef.current.value = "";
        heroRolesRef.current.value = "";
        heroBiographyRef.current.value = "";
        // heroImageRef.current.value = "";
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
          .then(() => {
            UploadImage();
            setShowSuccessMessage(true);
            setTextSuccessMessage("Update Success");
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000);
          });
        // await getHeroes()
        setSkillCount(0);
      } catch (error) {
        // Handle error case here
        console.log(error);
      }
    }
    getHeroes();
  };
  const onClickDelete = (event, hero) => {
    setIsDelete(true);
  };
  // const onClickEdit = (event, hero) => {
  //   setEditMode(true);
  //   setChangeFileMode(false);
  //   setAllHeroesToEdit(hero);
  //   setSkills(hero.skills || []);
  //   setSkillCount(hero.skills ? hero.skills.length : 0);
  // };

  // authContext.isLoggedin = true;
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
              <NotifyAction
                showSuccessMessage={showSuccessMessage}
                text={textSuccessMessage}
              />

              <form
                className="flex-col w-2/3 h-full bg-white border-2 border-[#0f1923] border-l-0 px-8 py-2 flex overflow-x-hidden overflow-y-auto"
                type="button"
                onSubmit={onSubmitHero}
              >
                <div className="w-full h-full p-2">
                  <div className="w-full h-fit text-4xl flex">
                    <p className="w-1/2"> ADD New HERO </p>
                    <span
                      className="w-1/2 flex justify-end"
                      onClick={onClickClose}
                    >
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
                  {editMode ? (
                    !changeFileMode ? (
                      <div
                        className="flex w-full items-center h-[35px] focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                        type="text"
                      >
                        <p className="w-5/6 pl-2">
                          {allHeroesToEdit.heroImage}
                        </p>
                        <button
                          className="w-1/6 bg-red-500 text-white h-full"
                          onClick={onchangeFileMode}
                        >
                          Ganti File
                        </button>
                      </div>
                    ) : (
                      <div className="w-full mb-2">
                        <input
                          className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid
      border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal
      text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] 
      file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit
      file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition 
      file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
      hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary
      focus:outline-none file:cursor-pointer"
                          type="file"
                          onChange={event => onUploadImage(event)}
                        />
                      </div>
                    )
                  ) : (
                    <div className="w-full mb-2 ">
                      <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid
      border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal
      text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] 
      file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit
      file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition 
      file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
      hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary
      focus:outline-none file:cursor-pointer"
                        type="file"
                        onChange={event => onUploadImage(event)}
                      />
                    </div>
                  )}

                  <div className="w-full h-full">
                    <div className="flex gap-5 items-center justify-center w-full h-[60px]">
                      {skillCount === 0 ? (
                        <ButtonNewSkill
                          onClick={addNewSkill}
                          text="+"
                          width="100%"
                        />
                      ) : (
                        <>
                          <ButtonNewSkill
                            onClick={addNewSkill}
                            text="+"
                            width="50%"
                          />
                          <ButtonNewSkill
                            onClick={removeSkill}
                            text="-"
                            width="50%"
                          />
                        </>
                      )}
                    </div>

                    {/* skills = [{a,b,c},{a,b,c}, ....] */}
                    {skills.map((_, index) => (
                      <div className="w-full flex mb-3" key={index}>
                        <div className="w-fit">
                          <div className="w-fit">
                            <label className="">Nama kemampuan</label>
                            <div className="w-full mb-1">
                              <input
                                className="w-[225px] h-full py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                                type="text"
                                ref={el => (skillNameRef.current[index] = el)}
                                defaultValue={
                                  editMode
                                    ? allHeroesToEdit.skills[index]
                                        ?.skillName || ""
                                    : ""
                                }
                              />
                            </div>
                          </div>

                          <div className="w-fit">
                            <label className="w-fit">Gambar kemampuan</label>
                            <div className="w-full mb-1">
                              <input
                                className="w-[225px] h-full py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
                                type="text"
                                ref={el => (skillImageRef.current[index] = el)}
                                defaultValue={
                                  editMode
                                    ? allHeroesToEdit.skills[index]
                                        ?.skillImage || ""
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
                                      ?.skillDescription || ""
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
            className="bg-[#0f1923] w-full h-fit mt-2 border-2 text-white overflow-x-hidden overflow-y-auto flex justify-center"
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
                        <div className="flex justify-center items-center gap-2">
                          <ButtonOption
                            hero={hero}
                            text="edit"
                            onClick={onClickEdit}
                          />
                          <ButtonOption
                            hero={hero}
                            text="delete"
                            onClick={onClickDelete}
                            isDelete={isDelete}
                            onDeleteHero={onDeleteHero}
                            onUnDelete={onUnDelete}
                          />
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
