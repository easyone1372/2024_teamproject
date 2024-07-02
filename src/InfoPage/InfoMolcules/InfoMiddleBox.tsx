//중간 박스 - 영업시간 부제목, 요일, 영업시간 출력(map?)

import InfoDayDetail from "../InfoAtom/InfoDayDetail";
import InfoSubTitle from "../InfoAtom/InfoSubTitle";

type InfoMiddleBoxProps = {
  openDay: string;
  openTime: string;
};

const InfoMiddleBox = ({ openDay, openTime }: InfoMiddleBoxProps) => {
  return (
    <div className="mt-4">
      <InfoSubTitle content={"영업시간"} />
      <InfoDayDetail dayInfo={openDay} dayTimeInfo={openTime} />
    </div>
  );
};
export default InfoMiddleBox;
