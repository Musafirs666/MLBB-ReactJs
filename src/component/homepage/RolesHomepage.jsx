const RolesHomepage = () => {
  return (
    <div className="w-full h-[840px] overflow-hidden relative bg-neutral-200">
      <div className="w-[1px] h-[840px] bg-gray-500 absolute bg-opacity-60 left-20"></div>
      <div className="text-white flex-col absolute left-36 h-full w-full">
        <div className="w-10/12 h-[1px] bg-gray-500 mt-12 opacity-60"></div>
        <div className="h-14 flex items-center mb-11 mt-11 font-semibold">
          <p className="text-9xl text-gray-900">ROLES</p>
          <div className="w-[660px] h-[370px] bg-red-500 absolute z-10 right-36 mt-[770px]">
            <img src="/img/map.png" alt="Map" />
          </div>
          <div className="w-[100px] h-[26px] bg-red-500 absolute z-10 right-[45rem] mt-[480px] flex justify-center items-center">
            <p className="font-medium">The Land of Dawn</p>
          </div>
        </div>
        <div className="ml-[95px] mt-20">
          <div className="h-14 flex items-center">
            <p className="text-xl text-gray-800">
              Choose Your Strategy From ability
            </p>
          </div>
          <div className="w-[270px] flex items-center mt-3">
            <p className="text-lg text-gray-500">
              Setiap peran atau laning adalah panggung tersendiri untuk
              memamerkan kemampuan berpikir kreatifmu. Setiap peran telah
              dirancang khusus untuk strategi tim, pertempuran yang spektakuler,
              dan momen-momen seru. Tunjukkan keahlianmu yang akan dijadikan
              panutan oleh pemain lain dalam permainan Mobile Legends: Bang Bang
            </p>
          </div>
          <div className="flex items-center justify-center w-[265px] h-[70px] border-gray-900 border border-opacity-30 ml-[-10px] mt-14">
            <button className="w-[250px] h-[55px] bg-red-500 text-xl">
              See All Roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesHomepage;
