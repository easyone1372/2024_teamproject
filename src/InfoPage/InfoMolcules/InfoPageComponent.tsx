import InfoDescriptionBox from "./InfoDescriptionBox";
import InfoMenuBox from "./InfoMenuBox";
import InfoMiddleBox from "./InfoMiddleBox";
import InfoTitleBox from "./InfoTitleBox";
import InfoTopImage from "./InfoTopImage";

export type InfoPageComponentProps = {
  infoTitle: string;
  infoStarNum: number;
  infoMainImg: string;
  infoSubImg: string;
  infoLocation: string;
  infoCall: string;
  infoSubTitle: string;
  infoOpenDay: string;
  infoOpenTime: string;
};

//이게맞아?
const InfoPageComponent = ({
  infoTitle,
  infoStarNum,
  infoMainImg,
  infoSubImg,
  infoLocation,
  infoCall,
  infoOpenDay,
  infoOpenTime,
}: InfoPageComponentProps) => {
  return (
    <div className="max-w-5xl w-full my-0 mx-auto ">
      <InfoTopImage mainImg={infoMainImg} subImg={infoSubImg} />
      <InfoTitleBox titleContent={infoTitle} titleStarNum={infoStarNum} />
      <InfoDescriptionBox location={infoLocation} callNumber={infoCall} />
      <InfoMiddleBox openDay={infoOpenDay} openTime={infoOpenTime} />
      <InfoMenuBox />
    </div>
  );
};
export default InfoPageComponent;
