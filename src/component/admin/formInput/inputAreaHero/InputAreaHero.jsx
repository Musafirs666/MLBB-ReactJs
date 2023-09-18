import React from "react";
import FormInputHero from "./formInputHero";
import HeaderForm from "./HeaderForm";
import FormInputSkills from "./FormInputSkills";
import { ButtonNewSkill } from "../../tableData/ButtonOption";
import { useState } from "react";
import { HeroSchema } from "../../../validation/HeroValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const InputAreaHero = props => {
  const {
    onSubmitHero,
    unShowForm,
    editMode,
    allHeroesToEdit,
    onchangeFileMode,
    addNewSkill,
    removeSkill,
    skillCount
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(HeroSchema)
  });

  const [editSkillImageMode, setEditSkillImageMode] = useState([]);
  const [editSkillIconMode, setEditSkillIconMode] = useState([]);

  const onEditSkillImageMode = index => {
    setEditSkillImageMode(prevSkillImageMode => {
      const updatedSkillImageMode = [...prevSkillImageMode];
      updatedSkillImageMode[index] = !updatedSkillImageMode[index];
      return updatedSkillImageMode;
    });
  };

  const onEditSkillIconMode = index => {
    setEditSkillIconMode(prevSkillIconMode => {
      const updatedSkillIconMode = [...prevSkillIconMode];
      updatedSkillIconMode[index] = !updatedSkillIconMode[index];
      return updatedSkillIconMode;
    });
  };

  return (
    <form
      className="flex-col w-2/3 h-full bg-white border-2 border-[#0f1923] border-l-0 px-8 py-2 flex overflow-x-hidden overflow-y-auto"
      type="button"
      onSubmit={handleSubmit(onSubmitHero)}
    >
      <div className="w-full h-full p-2">
        <HeaderForm unShowForm={unShowForm} />
        <FormInputHero
          name="heroName"
          register={register}
          label="Hero Name"
          editMode={editMode}
          allHeroesToEdit={allHeroesToEdit}
          type="text"
        />
        {errors.heroName && (
          <p className="text-red-500">{errors.heroName.message}</p>
        )}

        <FormInputHero
          name="heroRoles"
          register={register}
          label="Hero Roles"
          editMode={editMode}
          allHeroesToEdit={allHeroesToEdit}
          type="text"
        />
        {errors.heroRoles && (
          <p className="text-red-500">{errors.heroRoles.message}</p>
        )}

        <FormInputHero
          name="heroBiography"
          register={register}
          label="Hero Biography"
          editMode={editMode}
          allHeroesToEdit={allHeroesToEdit}
          type="textArea"
        />
        {errors.heroBiography && (
          <p className="text-red-500">{errors.heroBiography.message}</p>
        )}

        <FormInputHero
          name="heroImage"
          label="Image Hero"
          editMode={editMode}
          allHeroesToEdit={allHeroesToEdit}
          register={register}
          type="upload"
          onchangeFileMode={onchangeFileMode}
        />
        {errors.heroImage && (
          <p className="text-red-500">{errors.heroImage.message}</p>
        )}

        <div className="w-full h-full">
          <div className="flex gap-5 items-center justify-center w-full h-[60px]">
            {skillCount === 0 ? (
              <ButtonNewSkill onClick={addNewSkill} text="+" width="100%" />
            ) : (
              <>
                <ButtonNewSkill onClick={addNewSkill} text="+" width="50%" />
                <ButtonNewSkill onClick={removeSkill} text="-" width="50%" />
              </>
            )}
          </div>

          {Array.from({ length: skillCount }).map((_, index) => (
            <div className="w-full flex mb-3" key={index}>
              <div className="w-2/3">
                <FormInputSkills
                  label="Nama kemampuan"
                  type="text"
                  name={`skillName[${index}]`}
                  register={register(`skillName[${index}]`)}
                  editMode={editMode}
                  allHeroesToEdit={
                    allHeroesToEdit && allHeroesToEdit.skills
                      ? allHeroesToEdit.skills[index]?.skillName
                      : null
                  }
                />
                {errors.skillName?.[index] && (
                  <p className="text-red-500">
                    {errors.skillName[index].message}
                  </p>
                )}

                <FormInputSkills
                  label="Gambar kemampuan"
                  type="upload"
                  name={`skillImage[${index}]`}
                  register={register(`skillImage[${index}]`)}
                  onEditSkillMode={() => onEditSkillImageMode(index)}
                  editSkillMode={editSkillImageMode[index]}
                  editMode={editMode}
                  allHeroesToEdit={
                    allHeroesToEdit && allHeroesToEdit.skills
                      ? allHeroesToEdit.skills[index]?.skillImage
                      : null
                  }
                />
                {errors.skillImage?.[index] && (
                  <p className="text-red-500">
                    {errors.skillImage[index].message}
                  </p>
                )}

                <FormInputSkills
                  label="Icon kemampuan"
                  type="upload"
                  name={`skillIcon[${index}]`}
                  register={register(`skillIcon[${index}]`)}
                  onEditSkillMode={() => onEditSkillIconMode(index)}
                  editSkillMode={editSkillIconMode[index]}
                  editMode={editMode}
                  allHeroesToEdit={
                    allHeroesToEdit && allHeroesToEdit.skills
                      ? allHeroesToEdit.skills[index]?.skillImage
                      : null
                  }
                />
                {errors.skillIcon?.[index] && (
                  <p className="text-red-500">
                    {errors.skillIcon[index].message}
                  </p>
                )}
              </div>

              <div className="ml-4 w-full">
                <FormInputSkills
                  label="Deskripsi kemampuan"
                  type="textArea"
                  name={`skillDescription[${index}]`}
                  register={register(`skillDescription[${index}]`)}
                  editMode={editMode}
                  allHeroesToEdit={
                    allHeroesToEdit && allHeroesToEdit.skills
                      ? allHeroesToEdit.skills[index]?.skillDescription
                      : null
                  }
                />
                {errors.skillDescription?.[index] && (
                  <p className="text-red-500">
                    {errors.skillDescription[index].message}
                  </p>
                )}
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
  );
};

export default InputAreaHero;
