import { useEffect, useState } from "react";
import { InfoPageBoxProps } from "./InfoPageBox";
import InfoDayDetail, { InfoDayDetailProps } from "../InfoAtom/InfoDayDetail";
import axios from "axios";

const InfoDayBox = ({ storeId }: InfoPageBoxProps) => {
  const [dayDetail, setDayDetail] = useState<InfoDayDetailProps[]>([]);

  useEffect(() => {
    const fetchDays = async () => {
      try {
        const response = await axios.get(
          `https://localhost:3000/api/infoTime/${storeId}`
        );
        const data = response.data;
        const mappedData = data.map((item: any) => ({
          dayInfo: item.day_of_week,
          dayOpenTime: item.open_time,
          dayCloseTime: item.close_time,
          isClosed: item.is_closed,
        }));
        console.log(mappedData);
        setDayDetail(mappedData);
      } catch (error) {
        console.error("영업 시간 정보를 가져오는 중 오류 발생:", error);
      }
    };
    fetchDays();
  }, [storeId]);

  return (
    <div>
      {dayDetail.map((data, index) => (
        <InfoDayDetail
          key={index}
          dayInfo={data.dayInfo}
          dayOpenTime={data.dayOpenTime}
          dayCloseTime={data.dayCloseTime}
          isClosed={data.isClosed}
        />
      ))}
    </div>
  );
};

export default InfoDayBox;
