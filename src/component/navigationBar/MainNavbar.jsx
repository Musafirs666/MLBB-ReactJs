import LogoNavbar from "./LogoNavbar";
import ItemNavbar from "./ItemNavbar";
import SearchNavbar from "./SearchNavbar";
import DownloadNavbar from "./DownloadNavbar";
import DataItem from "./DataItem";
import LoginNavbar from "./LoginNavbar";

const MainNavbar = () => {
  return (
    <div className="flex w-screen bg-neutral-950 h-[75px] items-center gap-5 pl-9 pr-9 text-2xl fixed top-0 font-bebasNeue text-gray-50 z-30">
      <LogoNavbar />
      {DataItem.map((menu, index) => (
        <ItemNavbar
          key={index}
          title={menu.title}
          dropdownItems={menu.dropdownItems}
          index={index}
        />
      ))}
      <SearchNavbar />
      <DownloadNavbar />
      <LoginNavbar />
    </div>
  );
};

export default MainNavbar;
