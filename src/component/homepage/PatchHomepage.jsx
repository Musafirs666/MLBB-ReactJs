const PatchHomepage = () => {
  return (
    <div
      className="bg-lime-300 w-full h-[840px] overflow-hidden relative"
      style={{
        backgroundImage: `url('/img/patch2.jpg')`,
        backgroundSize: "cover"
      }}
    >
      <div className="w-[1px] h-[840px] bg-neutral-200 absolute z-10 right-24 bg-opacity-60"></div>
      <div className="w-[1px] h-[840px] bg-neutral-200 absolute z-10 right-96 bg-opacity-60"></div>
      <div className="w-[1px] h-[840px] bg-neutral-200 absolute bg-opacity-60 left-28"></div>
      <div className="text-white flex-col absolute bottom-0 left-36 mb-32">
        <div className="h-14 flex items-center">
          <p className="text-3xl">Patch 1.7.84.8553 // S27 // 7YR</p>
        </div>
        <div className="h-14 flex items-center mb-11 mt-11 font-semibold">
          <p className="text-9xl">We Own This</p>
        </div>
        <div className="flex items-center justify-center w-[265px] h-[70px] border-white border border-opacity-50">
          <button className="w-[250px] h-[55px] bg-red-500 text-lg">
            Overview S27
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatchHomepage;
