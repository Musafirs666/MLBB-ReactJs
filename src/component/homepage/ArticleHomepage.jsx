const ArticleHomepage = () => {
  const renderCards = () => {
    return [...Array(3)].map((_, index) => (
      <div key={index} className="mx-auto">
        <div className="h-[200px] w-[360px] bg-gray-500" />
        <div className="flex gap-8 mt-5">
          <p className="text-red-500">00/01/23</p>
          <p>category</p>
        </div>
        <div className="mt-1 text-3xl">
          Ini adalah contoh judul detail dalam card
        </div>
      </div>
    ));
  };

  return (
    <div className="h-[520px] bg-neutral-200">
      <div className="h-[125px] flex text-red-500">
        <p className="text-9xl mt-10 ml-24 flex-[90%] font-bold absolute z-20">
          News Article
        </p>
        <div className="flex w-full h-full">
          <p className="text-lg font-normal m-auto pl-[875px]">
            open article tab ...
          </p>
        </div>
      </div>
      <div id="card-container" className="h-full flex ml-24 mr-24 gap-[35px]">
        {renderCards()}
      </div>
    </div>
  );
};

export default ArticleHomepage;
