import React, { useContext } from "react";

let FormFunctionContext = useContext({
  onClickEdit: undefined,
  onClickCreateNew: undefined,
  editMode:false,
  isCreateNewExpanded:false,

});

function FormFunctionContextProvider() {
  const [editMode, setEditMode] = useState(false);
  const [isCreateNewExpanded, setIsCreateNewExpanded] = useState(false);
  const onClickEdit = (event, hero) => {
    setEditMode(true);
    setChangeFileMode(false);
    setAllHeroesToEdit(hero);
    setSkills(hero.skills || []);
    setSkillCount(hero.skills ? hero.skills.length : 0);
  };
  const onClickCreateNew = () => {
    setIsCreateNewExpanded(!isCreateNewExpanded);
    setEditMode(false);
  };
  return (
    <FormFunctionContext.Provider
      value={{
        onClickEdit,
        onClickCreateNew,
        isCreateNewExpanded,
        editMode,
      }}
    >
      {preprocessCSS.children}
    </FormFunctionContext.Provider>
  );
}

export default FormFunctionContext;
