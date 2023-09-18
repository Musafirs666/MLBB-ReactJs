import React, { useState } from "react";
import InfoHero from "./InfoHero";
import InfoSkill from "./InfoSkill";
import { storage } from "../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import axios from "axios";

const MainHeroes = () => {
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [defaultImageSkill, setDefaultImageSkill] = useState();
  const [defaultDescriptionSkill, setDefaultDescriptionSkill] = useState();
  const [defaultSkillName, setDefaultSkillName] = useState();

  const [heroImageRef, setHeroImageRef] = useState();
  const [allHeroes, setAllHeroes] = useState([]);
  const [nameOfSkills, setNameOfSkills] = useState([]);

  const apiAddress =
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/hero.json";

  // const hoverContext = useContext(HoverContext);
  const getHeroes = async () => {
    try {
      const response = await axios.get(apiAddress);
      const data = response.data;
      let heroesData = [];
      for (let key in data) {
        heroesData.push({ ...data[key], id: key });
      }
      setAllHeroes(heroesData);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHero = (event, hero) => {
    const skillRef = hero.skills.map(skill => {
      const newSkillIcon = skill.skillIcon;
      const iconRef = ref(storage, `${newSkillIcon}`);
      return getDownloadURL(iconRef)
        .then(url => url)
        .catch(error => {
          console.log(error);
          return null;
        });
    });

    Promise.all(skillRef)
      .then(result => {
        setNameOfSkills(result);
      })
      .catch(error => {
        console.log(error);
      });

    const imageRef = ref(storage, `${hero.heroImage}`);
    getDownloadURL(imageRef)
      .then(url => {
        setHeroImageRef(url);
      })
      .catch(error => {
        console.log(error);
      });

    setDefaultSkillName(hero.skills[0].skillName);
    setDefaultDescriptionSkill(hero.skills[0].skillDescription);

    const defaultImageSkillRef = ref(storage, `${hero.skills[0].skillImage}`);
    getDownloadURL(defaultImageSkillRef)
      .then(url => {
        setDefaultImageSkill(url);
      })
      .catch(error => {
        console.log(error);
      });

    setIsHeroExpanded(true);
    setSelectedHero(hero);
  };

  return (
    <div className="font-bebasNeue">
      <InfoHero
        onClickHero={onClickHero}
        selectedHero={selectedHero}
        heroImageRef={heroImageRef}
        allHeroes={allHeroes}
        setSelectedHero={setSelectedHero}
        setHeroImageRef={setHeroImageRef}
        getHeroes={getHeroes}
      />
      <InfoSkill
        isHeroExpanded={isHeroExpanded}
        setSelectedHero={setSelectedHero}
        allHeroes={allHeroes}
        getHeroes={getHeroes}
        selectedHero={selectedHero}
        nameOfSkills={nameOfSkills}
        defaultImageSkill={defaultImageSkill}
        setDefaultImageSkill={setDefaultImageSkill}
        defaultDescriptionSkill={defaultDescriptionSkill}
        setDefaultDescriptionSkill={setDefaultDescriptionSkill}
        defaultSkillName={defaultSkillName}
        setDefaultSkillName={setDefaultSkillName}
      />
    </div>
  );
};

export default MainHeroes;
