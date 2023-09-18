import React, { useEffect, useState } from "react";
import ItemsBattleTable from "./ItemsBattleTable";
import { storage } from "../../firebase-config";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const MainItemsBattle = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedJenisItems, setSelectedJenistItems] = useState();

  const [allItems, setAllItems] = useState();

  const schema = yup.object().shape({
    image: yup
      .mixed()
      .test("file required", "file harus diisi", function (value) {
        return value && value[0];
      })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    getItems();
  }, [selectedJenisItems]);

  // const apiAddress =
  //   "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/items/roam.json";

  const apiAddress =
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/items";

  const getItems = async () => {
    try {
      const response = await axios.get(
        `${apiAddress}/${selectedJenisItems ? selectedJenisItems : "roam"}.json`
      );
      const data = response.data;
      let itemsData = [];
      for (let key in data) {
        itemsData.push({ ...data[key], id: key });
      }
      setAllItems(itemsData);
    } catch (error) {
      console.log(error);
    }
    // console.log(allItems);
  };

  const onSelectJenisItem = value => {
    setSelectedJenistItems(value);
    setShowDropdown(false);
    // alert("selected: "+selectedJenisItems)
  };

  const handleDropdown = () => {
    setShowDropdown(prevShowDropdown => !prevShowDropdown);
  };

  const optionDropdown = [
    { value: "attack", label: "attack" },
    { value: "defend", label: "defend" },
    { value: "magic", label: "magical" },
    { value: "movement", label: "movement" },
    { value: "roam", label: "roam" }
  ];

  const onSubmit = async data => {
    let newItem = {
      itemsName: data.image[0].name,
      jenisItem: "defend",
      itemsSummary: "",
      itemsDescription: "",
      itemsUrl: `images/items/defend/${data.image[0].name}`
    };
    const itemName = newItem;
    await axios.post(
      "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app/items/defend.json",
      itemName
    );
  };

  return (
    <div className="mt-[75px] pb-[75px] bg-[#ece8e1] w-full h-full font-bebasNeue flex justify-center">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("image")}/>
        <input type="submit" className="border border-black w-20 h-10 mt-5"/>
      </form> */}
      <div className="w-1/12 border-r border-[#0f1923] border-opacity-30"></div>
      <div className="w-10/12 flex flex-col">
        <div className="h-fit w-full grid grid-cols-4 gap-x-1">
          <div className="h-[4px] w-[40px] bg-red-500"></div>
          <div className="h-[8px] w-[8px] bg-red-500"></div>
          <div className="h-[8px] w-[8px] bg-red-500"></div>
          <div className="h-[8px] w-[8px] bg-red-500"></div>
        </div>
        <div className="h-fit w-full grid grid-cols-4 gap-x-1 mt-8">
          <div className="h-[4px] w-[40px] bg-red-500 opacity-0"></div>
          <div className="h-[8px] w-[8px] bg-red-500"></div>
          <div className="h-[8px] w-[8px] bg-red-500 opacity-0"></div>
          <div className="h-[8px] w-[8px] bg-red-500 opacity-0"></div>
        </div>
        <div className="h-fit w-full  grid grid-cols-4 gap-x-1 mt-6">
          <div className="h-[8px] w-[110px] bg-red-500"></div>
          <div className="h-[8px] w-[8px] bg-red-500 opacity-0"></div>
          <div className="h-[8px] w-[8px] bg-red-500 opacity-0"></div>
          <div className="h-[8px] w-[8px] bg-red-500 opacity-0"></div>
        </div>
        <div className="h-fit w-full border-b border-[#0f1923] border-opacity-30 grid grid-cols-4 gap-x-1 mt-[70px]"></div>
        <section id="title" className="flex">
          <div className="w-5/6 h-full items-center py-10 my-2">
            <p className="w-full text-9xl font-semibold text-[#0f1923]">
              New Emblem
            </p>
          </div>
          <div className="w-1/6 h-full flex flex-col justify-center items-center ml-28">
            <p className="text-red-500 text-sm font-bebasNeue">ɐll ᴉs ʎonɹs</p>
            <p className="text-red-500 text-sm">ʍǝǝ - ɓoʇ - ʇɥᴉs</p>
            <div className="w-[110px] h-[4px] bg-red-500"></div>
            <div className="h-[8px] w-[8px] bg-red-500 mt-7 ml-20"></div>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center relative">
            <button
              type="button"
              onClick={handleDropdown}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-left p-5 w-[285px] h-[70px] ml-auto bg-[#ece8e1] border border-[#0f1923] border-opacity-30 text-lg font-thin my-auto flex items-center"
            >
              {selectedJenisItems ? selectedJenisItems : "Roam"}
              <svg
                className="w-4 h-4 ml-auto"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {showDropdown ? (
              <ul className="z-10 w-[285px] h-[185px] absolute top-full right-0 transform -translate-y-[69px] flex flex-col items-center ">
                {optionDropdown.map((option, index) => (
                  <li
                    key={index}
                    value={option.value}
                    onClick={() => onSelectJenisItem(option.value)}
                    className={`cursor-pointer pl-5 text-left border-x border-[#0f1923] border-opacity-30 w-full h-full text-[#0f1923] bg-[#ece8e1] hover:bg-[#0f1923] hover:text-[#ece8e1] text-lg flex items-center ${
                      index === optionDropdown.length - 1 ? "border-b" : ""
                    }`}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </section>
        <section id="table-emblem">
          <ItemsBattleTable allItems={allItems} />
        </section>
      </div>
      <span className="w-1/12"></span>
    </div>
  );
};

export default MainItemsBattle;
