const HeroesHomepage = () => {
  return (
    <div className="h-[740px] w-full bg-red-500 flex relative">
      <div className="mt-[90px]">
        <img
          className="w-[40%] absolute z-10 left-0"
          src="/img/lance.png"
          alt="Lance"
        />
        <img
          className="w-[40%] absolute z-10 left-[20rem]"
          src="/img/lingt.png"
          alt="Ling"
        />
      </div>
      <div className="absolute right-28 top-32">
        <div
          id="line-x"
          className="w-full h-[1px] bg-neutral-200 opacity-60 mt-[-20px]"
        />
        <h1 className="text-9xl text-neutral-200 mt-[50px]">Heroes</h1>
        <div className="h-14 flex items-center mt-7">
          <p className="text-2xl text-neutral-200">
            KREATIVITAS ADALAH KUNCI KEUNGGULANMU
          </p>
        </div>
        <div className="w-[350px] flex items-center mt-3">
          <p className="text-lg text-neutral-200 text-opacity-90">
            Lebih dari sekadar kekuatan dan strategi, kamu akan memilih Hero
            dengan kemampuan yang inovatif, fleksibel, dan mematikan untuk
            membuktikan keunggulanmu dalam pertempuran. Sejalan dengan
            keberagaman dalam dunia pertarungan, tidak ada Hero yang sama persis
            dengan karakteristik yang unik.
          </p>
        </div>
        <div className="flex items-center justify-center w-[265px] h-[70px] border-neutral-200 border border-opacity-30 ml-[-10px] mt-14">
          <button className="w-[250px] h-[55px] bg-neutral-200 font-lg">
            See All Heroes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesHomepage;
