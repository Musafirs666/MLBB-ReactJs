const GameplayHomepage = () => {
  return (
    <div className="w-full h-[840px] overflow-hidden relative bg-neutral-200">
      <div className="w-[1px] h-[840px] bg-gray-500 absolute bg-opacity-60 left-20" />
      <div
        className="absolute bottom-0"
        style={{
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: "65px 0 0 80px",
          borderColor: "transparent transparent transparent #ef4444"
        }}
      />
      <div className="text-white flex-col absolute left-36 h-full w-full">
        <div className="w-10/12 h-[1px] bg-gray-500 mt-12 opacity-60" />
        <div className="h-14 flex items-center mb-11 mt-11 font-semi-bold">
          <p className="text-9xl text-gray-900">We Are MLBB</p>
          <div className="w-[660px] h-[370px] bg-red-500 absolute z-10 right-36 mt-[770px]">
            <video src="/video/gamplay.mp4" autoPlay controls />
          </div>
          <div className="w-[100px] h-[26px] bg-red-500 absolute z-10 right-[45rem] mt-[480px] flex justify-center items-center">
            <p>Gameplay</p>
          </div>
        </div>
        <div className="ml-[95px] mt-20">
          <div className="h-14 flex items-center">
            <p className="text-xl text-gray-800">Break Your Limits</p>
          </div>
          <div className="w-[270px] flex items-center mt-3">
            <p className="text-lg text-gray-500">
              Mobile Legends adalah game MOBA 5v5 yang menawarkan pertempuran
              seru dan kompetitif. Pemain membentuk tim, memilih karakter unik,
              dan bekerja sama untuk menghancurkan menara musuh serta
              mengalahkan hero lawan. Dengan grafis yang memukau dan komunitas
              yang besar, Mobile Legends menjadi salah satu pilihan terbaik bagi
              penggemar game MOBA.
            </p>
          </div>
          <div className="flex items-center justify-center w-[265px] h-[70px] border-gray-900 border border-opacity-30 ml-[-10px] mt-14">
            <button className="w-[250px] h-[55px] bg-red-500 font-xl">
              Learn Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameplayHomepage;
