import React from "react";

export const ButtonOption = props => {
  return (
    <>
      <div>
        <button
          className="rounded-sm w-[60px] h-[25px] bg-[#0f1923] text-md text-white border border-red-500"
          onClick={event => props.onClick(props.event, props.hero)}
        >
          {props.text}
        </button>
      </div>
      {props.isDelete ? (
        <div className="w-[500px] h-[100px] bg-red-500 absolute z-10 top-64 flex items-center justify-center gap-5 p-5 rounded-sm left-96">
          <div className="text-white text-4xl justify-start flex-1">
            <p>Delete Hero?</p>
          </div>
          <ButtonDelete
            onClick={event => props.onDeleteHero(props.event, props.hero)}
            text="Yes"
          />
          <ButtonDelete onClick={props.onUnDelete} text="No" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export const ButtonDelete = props => {
  return (
    <button
      className="rounded-sm w-[70px] h-[35px] bg-[#0f1923] text-xl text-[#ffffff] border border-white border-opacity-80"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export const ButtonNewSkill = props => {
  return (
    <button
      className="rounded-sm h-[40px] bg-[#0f1923] text-xl text-[#ffffff]"
      style={{width: props.width}}
      onClick={props.onClick}
      type="button"
    >
      {props.text} Skill
    </button>
  );
};
