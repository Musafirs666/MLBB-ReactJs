import React, { useContext, useState, useEffect } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { NotifyAction } from "./NotifyAction";
import AddMenu from "./AddMenu";
import FormsToogleButton from "./FormsToogleButton";
import InputAreaHero from "./formInput/inputAreaHero/InputAreaHero";
import TableData from "./tableData/TableData";

const TheMainAdmin = () => {
  const authContext = useContext(AuthContext);

  const [allHeroes, setAllHeroes] = useState([]);
  const [allHeroesToEdit, setAllHeroesToEdit] = useState(null);
  const [skillCount, setSkillCount] = useState(0);
  const [currentImageName, setCurrentImageName] = useState();
  const [textSuccessMessage, setTextSuccessMessage] = useState("");

  const [isloading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isCreateNewExpanded, setIsCreateNewExpanded] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [changeFileMode, setChangeFileMode] = useState(false);

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

  const uploadIconSkills = async allSkillsIcon => {
    try {
      const uploadTasks = allSkillsIcon.map(async fileIconSkills => {
        const nameSkillFile = fileIconSkills.name; // Ambil nama file dari elemen array
        const iconSkillsRef = ref(storage, `images/icons/${nameSkillFile}`);
        await uploadBytes(iconSkillsRef, fileIconSkills);
      });
      await Promise.all(uploadTasks);
    } catch (error) {
      console.log(error);
    }
  };
  
  const uploadImageSkills = async allSkillsImage => {
    try {
      const uploadTasks = allSkillsImage.map(async fileImageSkills => {
        const nameSkillFile = fileImageSkills.name; // Ambil nama file dari elemen array
        const imageSkillsRef = ref(storage, `images/skills/${nameSkillFile}`);
        await uploadBytes(imageSkillsRef, fileImageSkills);
      });
      await Promise.all(uploadTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const UploadImage = async imageUpload => {
    if (imageUpload == null) return;
    try {
      const imageRef = ref(storage, `images/hero/${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);
    } catch (error) {
      console.log(error);
    }
  };

  const onShowForm = () => {
    setIsCreateNewExpanded(!isCreateNewExpanded);
    setEditMode(false);
  };

  const apiAddress =
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json";

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
    setSkillCount(prevCount => prevCount + 1);
  };

  const removeSkill = () => {
    setSkillCount(prevCount => prevCount - 1);
  };

  const onDeleteHero = async (event, hero) => {
    if (isDelete === true) {
      try {
        await axios.delete(
          "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero/" +
            hero.id +
            ".json"
        );
        const deleteImage = ref(storage, `${hero.heroImage}`);
        await deleteObject(deleteImage);

        setShowSuccessMessage(true);
        setTextSuccessMessage("Delete Success");
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);

        setIsDelete(false);
      } catch (error) {
        console.log(error);
      }
    } 
    getHeroes();
  };

  const unShowForm = () => {
    setEditMode(false);
    setIsCreateNewExpanded(false);
  };

  const onUnDelete = () => {
    setIsDelete(false);
  };

  const onSubmitHero = async data => {
    const newResult = [];
    let allSkillsImage = [];
    let allSkillsIcon = [];

    for (let i = 0; i < data.skillName?.length; i++) {
      const skillName = data.skillName[i];
      const skillImage = data.skillImage[i][0].name;
      const skillIcon = data.skillIcon[i][0].name;
      const skillDescription = data.skillDescription[i];

      allSkillsImage = [...allSkillsImage, data.skillImage[i][0]];
      allSkillsIcon = [...allSkillsIcon, data.skillIcon[i][0]];

      newResult[i] = { skillName, skillImage, skillIcon, skillDescription };
    }

    const { heroImage, heroName, heroRoles,heroBiography } = data;

    let hero = {
      heroName,
      heroRoles,
      heroBiography,
      heroImage: `images/hero/${heroImage[0].name}`,
      skills: newResult
    };

    if (!editMode) {
      try {
        await axios.post(apiAddress, hero).then(() => {
          uploadImageSkills(allSkillsImage);
          uploadIconSkills(allSkillsIcon);
          UploadImage(data.heroImage[0]);
          setShowSuccessMessage(true);
          setTextSuccessMessage("Create Success");
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        });
        setSkillCount(0);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (currentImageName != hero.heroImage) {
          const prevImageRef = ref(storage, `${currentImageName}`);
          deleteObject(prevImageRef)
            .then(() => {
              UploadImage();
            })
            .catch(error => {
              console.log("Error saat menghapus gambar lama:", error);
            });
          await axios
            .put(
              "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero/" +
                allHeroesToEdit.id +
                ".json",
              hero
            )
            .then(() => {
              UploadImage();
              uploadIconSkills();
              uploadImageSkills();
              setShowSuccessMessage(true);
              setTextSuccessMessage("Update Success");
              setTimeout(() => {
                setShowSuccessMessage(false);
              }, 3000);
            });
          setSkillCount(0);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    }
    getHeroes();
  };

  const onClickDelete = (event, hero) => {
    setIsDelete(true);
  };

  const onClickEdit = (event, hero) => {
    setCurrentImageName(hero.heroImage);
    setEditMode(true);
    setChangeFileMode(false);
    setAllHeroesToEdit(hero);
    setSkillCount(hero.skills ? hero.skills.length : 0);
  };

  if (authContext.isLoggedin) {
    return (
      <div
        className="bg-[#ece8e1] mt-[75px] min-w-screen flex flex-col overflow-hidden font-bebasNeue relative p-3"
        style={{ height: "calc(100vh - 75px)" }}
      >
        <section id="CRUD-Forms" className="w-full">
          <FormsToogleButton
            onClickEdit={onClickEdit}
            onShowForm={onShowForm}
          />

          {isCreateNewExpanded || editMode ? (
            <div className="w-full h-[490px] bg-[#0f1923] mt-[8px] flex">
              <AddMenu />
              <NotifyAction
                showSuccessMessage={showSuccessMessage}
                text={textSuccessMessage}
              />
              <InputAreaHero
                onSubmitHero={onSubmitHero}
                unShowForm={unShowForm}
                changeFileMode={changeFileMode}
                skillCount={skillCount}
                removeSkill={removeSkill}
                editMode={editMode}
                allHeroesToEdit={allHeroesToEdit}
                onchangeFileMode={onchangeFileMode}
                addNewSkill={addNewSkill}
                skills={allHeroesToEdit?.skills || []}
              />
            </div>
          ) : (
            ""
          )}
        </section>
        {!isloading && (
          <section
            id="data-table"
            className="bg-[#0f1923] w-full h-fit mt-2 border-2 text-white overflow-x-hidden overflow-y-auto flex justify-center"
          >
            <TableData
              allHeroes={allHeroes}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              isDelete={isDelete}
              onDeleteHero={onDeleteHero}
              onUnDelete={onUnDelete}
            />
          </section>
        )}
        {isloading && <p>loading....</p>}
      </div>
    );
  } else {
    return null; // atau tampilkan pesan jika tidak terautentikasi
  }
};

export default TheMainAdmin;
