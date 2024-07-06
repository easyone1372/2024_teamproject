import InfoImage from "../InfoAtom/InfoImage";

//상단 이미지 컴포넌트 - 2장
type InfoTopImageProps = {
  mainImg: string;
};

const InfoTopImage = ({ mainImg }: InfoTopImageProps) => {
  return (
    <div className="flex w-full h-64 mb-4">
      <InfoImage content={mainImg} />
    </div>
  );
};
export default InfoTopImage;
