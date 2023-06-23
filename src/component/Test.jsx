import React from "react";

const Test = () => {
  const claude = [
    {
      heroBiography: "Pria dan Monyet Bersenjata",
      heroImage: "Claude.png",
      heroName: "Claude",
      heroRoles: "MM",
      skills: [
        {
          skillDescription: "fire with dexter",
          skillImage: "fire.png",
          skillName: "Blazing duet"
        },
        {
          skillDescription: "pindah tempat",
          skillImage: "tp.png",
          skillName: "teleports"
        }
      ]
    }
  ];

  const allSkills = claude.map((hero, index) => {
    return hero.skills.map((skill, index) => {
      return skill;
    });
  });

  console.log(allSkills);
  return null;
};

export default Test;
