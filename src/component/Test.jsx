import React, { useEffect } from "react";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TestErrors from "./TestErrors";

const Test = () => {
  const schema = yup.object().shape({
    userName: yup
      .array()
      .of(
        yup.string().required("Nama Skill Hero tidak Boleh Kosong"),
        function (value) {
          return value !== null && value.length > 0;
        }
      ),
    newFile: yup.array().of(
      yup
        .mixed()
        .test("fileRequired", "File harus diunggah!", function (value) {
          return value !== null && value.length > 0;
        })
    )
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [inputCount, setInputCount] = useState(0);

  const addNewInput = event => {
    event.preventDefault();
    setInputCount(prevInputCount => prevInputCount + 1);
  };
  const [result, setResult] = useState({});
  useEffect(() => {
    console.log(result);
  }, [result]);

  const onSubmitForm = async data => {
    const newResult = {};
    for (let i = 0; i < data.userName.length; i++) {
      const userName = data.userName[i];
      const file = data.newFile[i][0].name;
      newResult[i] = { userName, file };
    }
    setResult(newResult);
  };

  return (
    <div className="mt-[75px] flex flex-col w-full h-fit">
      <button
        className="border-2 border-blue-600 bg-purple-400 h-10 w-20"
        onClick={event => addNewInput(event)}
      >
        +input
      </button>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        {Array.from({ length: inputCount }).map((_, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="input here"
                className={`w-40 h-12 border-2 border-blue-600 focus:outline-none`}
                name={`userName[${index}]`}
                {...register(`userName[${index}]`)}
              />
              {errors.userName?.[index] && (
                <p>{errors.userName[index].message}</p>
              )}

              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded-sm border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-[#0f1923] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-red-500 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-[#0f1923] focus:border-primary focus:text-red-500 focus:shadow-te-primary focus:outline-none file:cursor-pointer"
                type="file"
                name={`newFile[${index}]`}
                accept="image/*"
                {...register(`newFile[${index}]`)}
              />
              {errors.newFile?.[index] && (
                <p className="text-red-500 mt-1">
                  {errors.newFile[index].message}
                </p>
              )}
            </div>
          );
        })}

        <input type="submit" className="w-40 h-10 mt-5 border-2 border-black" />
      </form>
    </div>
  );
};

export default Test;
