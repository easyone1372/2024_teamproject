import { useEffect, useState } from "react";
import InfoPageComponent, { InfoPageComponentProps } from "./InfoPageComponent";

const InfoPageList = () => {
  const [infoPageList, setInfoPageList] = useState<InfoPageComponentProps[]>(
    []
  );

  useEffect(() => {
    // 서버에서 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:3000/api/infoPage");
        const data: InfoPageComponentProps[] = await response.json();
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
          infoTitle={data.infoTitle}
          infoStarNum={data.infoStarNum}
          infoLocation={data.infoLocation}
          infoCall={data.infoCall}
          infoMainImg={data.infoMainImg}
          infoOpenDay={data.infoOpenDay}
          infoSubImg={data.infoSubImg}
          infoOpenTime={data.infoOpenTime}
          infoSubTitle={"영업시간"}
        />
      ))}
    </div>
  );
};

export default InfoPageList;
