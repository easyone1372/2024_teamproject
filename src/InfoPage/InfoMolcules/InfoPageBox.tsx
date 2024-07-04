import { useEffect, useState } from "react";
import InfoPageComponent, { InfoPageComponentProps } from "./InfoPageComponent";
import axios from "axios";

export type InfoPageBoxProps = {
  storeId: number; // storeId를 props로 받습니다.
};

const InfoPageBox = ({ storeId }: InfoPageBoxProps) => {
  const [infoPageData, setInfoPageData] =
    useState<InfoPageComponentProps | null>(null);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await axios.get<InfoPageComponentProps>(
          `http://localhost:3000/api/infoPage/${storeId}`
        );
        const data = response.data;
        console.log(data);
        setInfoPageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [storeId]);

  // infoPageData가 없으면 로딩 또는 에러 메시지를 보여줍니다.
  if (!infoPageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <InfoPageComponent
        storeName={infoPageData.storeName}
        storeRating={infoPageData.storeRating}
        mainImageUrl={infoPageData.mainImageUrl}
        subImageUrl={infoPageData.subImageUrl}
        storeAddress={infoPageData.storeAddress}
        storePhone={infoPageData.storePhone}
      />
    </div>
  );
};

export default InfoPageBox;
