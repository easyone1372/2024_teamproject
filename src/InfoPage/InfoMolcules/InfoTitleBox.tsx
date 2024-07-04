import InfoStar from "../InfoAtom/InfoStar";
import InfoTitle from "../InfoAtom/InfoTitle";

//가게 이름 컴포넌트 - 이름, 별점
type InfoTitleBoxProps = {
  titleContent: string;
  titleStarNum: number;
};

const InfoTitleBox = ({ titleContent, titleStarNum }: InfoTitleBoxProps) => {
  return (
    <div className="flex flex-col gap-4 border-x-0 border-t-0 border-b border-solid ">
      <InfoTitle content={titleContent}></InfoTitle>
      <InfoStar starNum={titleStarNum}></InfoStar>
    </div>
  );
};
export default InfoTitleBox;
