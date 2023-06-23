const TitleHomepage = () => {
  return (
    <div
      className="h-[490px] w-full overflow-hidden text-xl flex-col text-white justify-center items-center"
      style={{
        backgroundImage: `url('/img/landing.jpg')`,
        backgroundSize: "cover"
      }}
    >
      <div className="w-[1px] h-[490px] bg-neutral-200 absolute z-10 ml-24 bg-opacity-60"></div>
      <div className="w-[1px] h-[490px] bg-neutral-200 absolute z-10 left-96 bg-opacity-60"></div>
      <div className="w-[1px] h-[490px] bg-neutral-200 absolute bg-opacity-60 right-28"></div>

      <div
        className="absolute bottom-20"
        style={{
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: "70px 0 0 60px",
          borderColor: "transparent transparent transparent #e5e5e5"
        }}
      ></div>
      <div className="flex items-center justify-center h-full w-full mt-[100px]">
        <div className="text-white flex-col w-full h-full items-center justify-center">
          <div className="w-full h-14 flex items-center justify-center">
            <p className="text-lg font-light text-center">
              Game Perang Strategy Berbasis Moba 5v5
            </p>
          </div>
          <div className="h-14 w-full flex items-center justify-center mb-11 mt-11 font-semibold">
            <p className="text-8xl text-center">MOBILE LEGENDS</p>
          </div>
          <div className="h-14 w-full flex items-center justify-center">
            <div className="flex items-center justify-center w-[265px] h-[70px] border-white border border-opacity-50">
              <button className="w-[250px] h-[55px] bg-red-500 text-xl">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHomepage;
