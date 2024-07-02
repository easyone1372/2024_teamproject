import { useEffect, useState } from "react";
import InfoPageComponent, { InfoPageComponentProps } from "./InfoPageComponent";
import axios from "axios";

const InfoPageList = () => {
  const [infoPageList, setInfoPageList] = useState<InfoPageComponentProps[]>(
    []
  );

  useEffect(() => {
    // 서버에서 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:3000/api/infoPage");
        const data = response.data;
        setInfoPageList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {infoPageList.map((data, index: number) => (
        <InfoPageComponent
          key={index}
          storeName={data.storeName}
          storeStar={data.storeStar}
          storeLocation={data.storeLocation}
          storeCall={data.storeCall}
          mealMainImg={data.mealMainImg}
          storeOpenDay={data.storeOpenDay}
          mealSubImg={data.mealSubImg}
          infoOpenTime={data.infoOpenTime}
          infoSubTitle={"영업시간"}
        />
      ))}
    </div>
  );
};

export default InfoPageList;
