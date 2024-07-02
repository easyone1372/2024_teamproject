import InfoMenu from "../InfoAtom/InfoMenu";
import { InfoMenuList, InfoMenuListProps } from "../InfoAtom/InfoMenuList";
import InfoSubTitle from "../InfoAtom/InfoSubTitle";

const InfoMenuBox = () => {
  return (
    <div>
      <InfoSubTitle content={"메뉴"} />
      {InfoMenuList.map((menu: any, index: number) => (
        <InfoMenu
          key={index}
          menuName={menu.menuName}
          menuIngredient={menu.menuIngredient}
          menuQuantity={menu.menuQuantity}
        />
      ))}
    </div>
  );
};

export default InfoMenuBox;
