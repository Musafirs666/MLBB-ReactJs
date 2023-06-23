import TitleHomepage from "./TitleHomepage";
import ArticleHomepage from "./ArticleHomepage";
import PatchHomepage from "./PatchHomepage";
import GameplayHomepage from "./GameplayHomepage";
import HeroesHomepage from "./HeroesHomepage";
import RolesHomepage from "./RolesHomepage";

const MainHomepage = () => {
  return (
    <div className="mt-[75px] font-bebasNeue flex-col w-full overflow-hidden h-fit">
      <TitleHomepage />
      <ArticleHomepage />
      <PatchHomepage />
      <GameplayHomepage />
      <HeroesHomepage />
      <RolesHomepage />
    </div>
  );
};

export default MainHomepage;
