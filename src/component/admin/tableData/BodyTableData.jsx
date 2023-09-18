import React from "react";
import { ButtonOption } from "./ButtonOption";

const BodyTableData = (props) => {
  return (
    <tbody className="border-x-2">
      {props.allHeroes.map((hero, index) => {
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
                  <p>Skill Icon: {skill.skillIcon}</p>
                  <p>Skill Image: {skill.skillImage}</p>
                </div>
              ))}
            </td>
            <td className="border-x-2 border-[#343f44]">
              <div className="flex justify-center items-center gap-2">
                <ButtonOption hero={hero} text="edit" onClick={props.onClickEdit} />
                <ButtonOption
                  hero={hero}
                  text="delete"
                  onClick={props.onClickDelete}
                  isDelete={props.isDelete}
                  onDeleteHero={props.onDeleteHero}
                  onUnDelete={props.onUnDelete}
                />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default BodyTableData;
