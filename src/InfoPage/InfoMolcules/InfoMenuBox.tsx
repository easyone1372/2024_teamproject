import InfoSubTitle from "../InfoAtom/InfoSubTitle";
import InfoMenuList, { InfoMenuListProps } from "./InfoMenuList";

const InfoMenuBox = ({ storeId }: InfoMenuListProps) => {
  return (
    <div>
      <InfoSubTitle content={"메뉴"} />
      <InfoMenuList storeId={storeId} />
    </div>
  );
};

export default InfoMenuBox;
