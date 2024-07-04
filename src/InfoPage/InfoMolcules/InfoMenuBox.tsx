import InfoSubTitle from "../InfoAtom/InfoSubTitle";
import InfoMenuList from "./InfoMenuList";

const InfoMenuBox = () => {
  return (
    <div>
      <InfoSubTitle content={"메뉴"} />
      <InfoMenuList />
    </div>
  );
};

export default InfoMenuBox;
