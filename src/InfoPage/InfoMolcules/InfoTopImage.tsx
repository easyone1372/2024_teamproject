import InfoImage from "../InfoAtom/InfoImage";

//상단 이미지 컴포넌트 - 2장
type InfoTopImageProps = {
  mainImg: string;
  subImg: string;
};

const InfoTopImage = ({ mainImg, subImg }: InfoTopImageProps) => {
  return (
    <div className="flex w-full h-64 mb-4">
      <InfoImage content={mainImg} />
      <InfoImage content={subImg} />
    </div>
  );
};
export default InfoTopImage;
