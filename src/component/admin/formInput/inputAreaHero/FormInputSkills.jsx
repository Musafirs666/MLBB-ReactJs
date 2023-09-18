import React from "react";

const FormInputSkills = props => {
  const {
    label,
    editMode,
    allHeroesToEdit,
    type,
    editSkillMode,
    onEditSkillMode,
    name,
    register,
  } = props;
  let inputElemen;

  switch (type) {
    case "text":
      inputElemen = (
        <>
          <input
            className="w-full h-full py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
            type="text"
            name={name}
            {...register}
            defaultValue={editMode ? allHeroesToEdit || "" : ""}
          />
        </>
      );
      break;
    case "upload":
      inputElemen = (
        <div className="w-full mb-2">
          {editMode ? (
            !editSkillMode ? (
              <div className="flex w-full items-center h-[35px] focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]">
                <p className="w-2/3 pl-2">{allHeroesToEdit}</p>
                <button
                  className="w-1/3 bg-red-500 text-white h-full right-0"
                  type="button"
                  onClick={onEditSkillMode}
                >
                  Ganti File
                </button>
              </div>
            ) : (
              <div className="w-full mb-2">
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary focus:outline-none file:cursor-pointer"
                  type="file"
                  name={name}
                  {...register}
                />
              </div>
            )
          ) : (
            <div className="w-full h-full mb-2">
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary focus:outline-none file:cursor-pointer"
                type="file"
                name={name}
                accept="image/*"
                {...register}
              />
            </div>
          )}
          {/* {errors && <p style={{ color: "red" }}>{errors}</p>} */}
        </div>
      );
      break;
    case "textArea":
      inputElemen = (
        <>
          <textarea
            className="whitespace-normal overflow-auto w-full h-[160px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
            style={{
              resize: "none"
            }}
            name={name}
            {...register}
            defaultValue={editMode ? allHeroesToEdit || "" : ""}
          ></textarea>
        </>
      );
      break;
    default:
      inputElemen = null;
  }
  return (
    <>
      <label>{label}</label>
      <div className="w-full mb-1">{inputElemen}</div>
    </>
  );
};

export default FormInputSkills;
