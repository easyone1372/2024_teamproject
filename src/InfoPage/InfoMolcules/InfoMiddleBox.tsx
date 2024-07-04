//중간 박스 - 영업시간 부제목, 요일, 영업시간 출력(map?)

import InfoSubTitle from "../InfoAtom/InfoSubTitle";
import InfoDayBox from "./InfoDayBox";
import { InfoPageBoxProps } from "./InfoPageBox";

const InfoMiddleBox = ({ storeId }: InfoPageBoxProps) => {
  return (
    <div className="mt-4">
      <InfoSubTitle content={"영업시간"} />
      <InfoDayBox storeId={storeId} />
    </div>
  );
};
export default InfoMiddleBox;
