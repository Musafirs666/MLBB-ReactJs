import React, { useEffect, useRef, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"; // Import Firebase Storage modules
import { Carousel } from "flowbite-react";

const MainGameMode = () => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const storage = getStorage(); // Initialize Firebase Storage

    const imgGameModeRef = ref(storage, "images/game mode");

    try {
      const fetchImages = async () => {
        const imageList = await listAll(imgGameModeRef); // List all items in the "images/game mode" folder

        const urls = await Promise.all(
          imageList.items.map(async item => {
            const downloadUrl = await getDownloadURL(item);
            return downloadUrl;
          })
        );

        setAllImages(urls);
      };

      fetchImages();
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }, []); // Empty array means the effect will run once after the initial render

  return (
    <div className="mt-[75px] bg-[#ece8e1] w-full h-[725px] flex">
      <div className="w-1/12 h-full border-r border-white border-opacity-70"></div>
      <div className="w-1/12 h-full"></div>
      <div className="w-10/12 h-full font-bebasNeue justify-center items-center">
        <h1 className="text-8xl font-bold mt-[80px] z-20 absolute left-[110px]">
          Mode
        </h1>
        <div className="flex w-full h-[470px] mt-[120px] relative pointer-events-none">
          <div className="flex w-full h-full absolute z-20">
            <div className="w-fit h-full mt-auto flex flex-col">
              <div className="w-[60px] h-[120px] bg-[#ece8e1] opacity-30 mt-[80px]"></div>
              <div className="w-[60px] h-[60px] bg-[#ece8e1] opacity-30 mt-auto"></div>
              <div className="w-[60px] h-[120px] bg-[#ece8e1] "></div>
            </div>
            <div className="w-fit h-full mt-auto flex flex-col">
              <div className="w-[60px] h-[120px] bg-[#ece8e1] opacity-30 mt-auto"></div>
              <div className="w-[60px] h-[60px] bg-[#ece8e1] "></div>
            </div>
            <div className="w-fit h-full ml-auto flex flex-col">
              <div className="w-[60px] h-[60px] bg-[#ece8e1] opacity-30 ml-auto mt-auto"></div>
              <div className="w-[360px] h-[60px] opacity-0"></div>
              <div className="w-[360px] h-[60px] bg-[#ece8e1] opacity-30 ml-auto"></div>
              <div className="w-fit h-fit flex">
                <div className="w-[60px] h-[60px] bg-[#ece8e1]"></div>
                <div className="w-[60px] h-[60px] bg-[#ece8e1]"></div>
                <div className="w-[300px] h-[60px] bg-[#ece8e1]"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[880px] absolute top-0"
          style={{ width: `calc(100vw - 200px)` }}
        >
          <Carousel interval={5000} leftControl=" " rightControl=" ">
            {allImages.map((url, index) => (
              <div className="box-border h-[445px] w-[920px] left-0">
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index}`}
                  className="h-[445px] w-[920px] ml-[440px]"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-2/12 h-full"></div>
      <div className="w-1/12 h-full border-l border-white border-opacity-70"></div>
    </div>
  );
};

export default MainGameMode;
