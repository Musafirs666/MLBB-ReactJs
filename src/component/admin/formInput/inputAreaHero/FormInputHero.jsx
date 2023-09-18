import React, { useEffect, useState } from "react";

const FormInputHero = props => {
  const [changeFileMode, setChangeFileMode] = useState(false);
  const {
    label,
    type,
    editMode,
    allHeroesToEdit,
    name,
    register,
    // errors
  } = props;

  const onchangeFileMode = () => {
    setChangeFileMode(true);
  };

  let inputElement;

  switch (type) {
    case "text":
      inputElement = (
        <>
          <input
            className={`w-full h-[35px] py-1 px-2 px-ss2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]`}
            type="text"
            name={name}
            {...register(name)}
            defaultValue={editMode ? allHeroesToEdit.heroName : ""}
          />
          
        </>
      );
      break;

    case "textArea":
      inputElement = (
        <div className="w-full mb-1">
          <textarea
            className="whitespace-normal overflow-auto w-full h-[80px] py-1 px-2 focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]"
            style={{ resize: "none" }}
            name={name}
            {...register(name)}
            defaultValue={editMode ? allHeroesToEdit.heroBiography : ""}
          ></textarea>
        </div>
      );
      break;

    case "upload":
      inputElement = (
        <div className="w-full mb-2">
          {editMode ? (
            !changeFileMode ? (
              <div className="flex w-full items-center h-[35px] focus:outline-none rounded-sm text-neutral-800 border border-[#0f1923]">
                <p className="w-5/6 pl-2">{allHeroesToEdit.heroImage}</p>
                <button
                  className="w-1/6 bg-red-500 text-white h-full"
                  type="button"
                  onClick={onchangeFileMode}
                >
                  Ganti File
                </button>
              </div>
            ) : (
              <div className="w-full mb-2">
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary focus:outline-none file:cursor-pointer"
                  accept="image/*"
                  name={name}
                  type="file"
                  {...register(name)}
                />
              </div>
            )
          ) : (
            <div className="w-full mb-2">
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary focus:outline-none file:cursor-pointer"
                type="file"
                name={name}
                accept="image/*"
                {...register(name)}
              />
            </div>
          )}
          {/* {errors && (
            <p style={{ color: "red" }}>{errors}</p>)} */}
        </div>
      );
      break;

    default:
      inputElement = null;
  }

  return (
    <>
      <label>{label}</label>
      <div className="w-full mb-2">{inputElement}</div>
    </>
  );
};

export default FormInputHero;
