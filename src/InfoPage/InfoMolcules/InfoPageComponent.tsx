import InfoDescriptionBox from "./InfoDescriptionBox";
import InfoTitleBox from "./InfoTitleBox";
import InfoTopImage from "./InfoTopImage";

export type InfoPageComponentProps = {
  storeName: string;
  storeRating: number;
  mainImageUrl: string;
  subImageUrl: string;
  storeAddress: string;
  storePhone: string;
};

//이게맞아?
const InfoPageComponent = ({
  storeName,
  storeRating,
  mainImageUrl,
  subImageUrl,
  storeAddress,
  storePhone,
}: InfoPageComponentProps) => {
  return (
    <div className="max-w-5xl w-full my-0 mx-auto ">
      <InfoTopImage mainImg={mainImageUrl} subImg={subImageUrl} />
      <InfoTitleBox titleContent={storeName} titleStarNum={storeRating} />
      <InfoDescriptionBox location={storeAddress} callNumber={storePhone} />
    </div>
  );
};
export default InfoPageComponent;
