import React from "react";
import HeadTableData from "./HeadTableData";
import BodyTableData from "./BodyTableData";

const TableData = props => {
  const {
    allHeroes,
    onClickEdit,
    onClickDelete,
    isDelete,
    onDeleteHero,
    onUnDelete
  } = props;
  return (
    <table className="w-full">
      <HeadTableData />
      <BodyTableData
        allHeroes={allHeroes}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        isDelete={isDelete}
        onDeleteHero={onDeleteHero}
        onUnDelete={onUnDelete}
      />
    </table>
  );
};

export default TableData;
