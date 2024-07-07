import InfoDescriptionBox from "./InfoDescriptionBox";
import InfoTitleBox from "./InfoTitleBox";
import InfoTopImage from "./InfoTopImage";

export type InfoPageComponentProps = {
  name: string;
  rating: number;
  imageUrl: string;
  address: string;
  phone: string;
};

//이게맞아?
const InfoPageComponent = ({
  name,
  rating,
  imageUrl,
  address,
  phone,
}: InfoPageComponentProps) => {
  return (
    <div className="max-w-5xl w-full my-0 mx-auto ">
      <InfoTopImage imgUrl={imageUrl} />
      <InfoTitleBox titleContent={name} titleStarNum={rating} />
      <InfoDescriptionBox location={address} callNumber={phone} />
    </div>
  );
};
export default InfoPageComponent;
