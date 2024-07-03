import InfoDescriptionBox from "./InfoDescriptionBox";
import InfoMenuBox from "./InfoMenuBox";
import InfoMiddleBox from "./InfoMiddleBox";
import InfoTitleBox from "./InfoTitleBox";
import InfoTopImage from "./InfoTopImage";

export type InfoPageComponentProps = {
  storeName: string;
  storeStar: number;
  mealMainImg: string;
  mealSubImg: string;
  storeLocation: string;
  storeCall: string;
  storeOpenDay: string;
  openTime: string;
  closeTime: string;
};

//이게맞아?
const InfoPageComponent = ({
  storeName,
  storeStar,
  mealMainImg,
  mealSubImg,
  storeLocation,
  storeCall,
  storeOpenDay,
  openTime,
  closeTime,
}: InfoPageComponentProps) => {
  return (
    <div className="max-w-5xl w-full my-0 mx-auto ">
      <InfoTopImage mainImg={mealMainImg} subImg={mealSubImg} />
      <InfoTitleBox titleContent={storeName} titleStarNum={storeStar} />
      <InfoDescriptionBox location={storeLocation} callNumber={storeCall} />
      <InfoMiddleBox
        openDay={storeOpenDay}
        openTime={openTime}
        closeTime={closeTime}
      />
      <InfoMenuBox />
    </div>
  );
};
export default InfoPageComponent;
