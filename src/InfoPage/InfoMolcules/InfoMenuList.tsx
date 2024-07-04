import { useEffect, useState } from "react";
import InfoMenuComponent, { InfoMenuComponentProps } from "./InfoMenuComponent";
import axios from "axios";

const InfoMenuList = () => {
  const [infoMenuList, setInfoMenuList] = useState<InfoMenuComponentProps[]>(
    []
  );

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/infoMenu");
        const data = response.data;
        console.log(data);
        setInfoMenuList(data);
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      {infoMenuList.map((data, index: number) => (
        <InfoMenuComponent
          key={index}
          kitName={data.kitName}
          kitIngredient={data.kitIngredient}
          kitCount={data.kitCount}
        />
      ))}
    </div>
  );
};

export default InfoMenuList;
