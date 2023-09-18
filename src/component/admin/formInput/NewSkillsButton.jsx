import React from "react";

const NewSkillsButton = () => {
  return (
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
  );
};

export default NewSkillsButton;
