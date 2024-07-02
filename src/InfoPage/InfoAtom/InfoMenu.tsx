//밀키트 메뉴 출력 컴포넌트
//데이터 넣어서 찍어봐야 감 잡을 수 있을 듯요

import { InfoMenuListProps } from "./InfoMenuList";

const InfoMenu = ({
  menuName,
  menuIngredient,
  menuQuantity,
}: InfoMenuListProps) => {
  return (
    <div className="flex justify-between items-center text-base h-24 gap-1 border">
      <span>{menuName}</span>
      <div className="flex flex-col gap-1 ">
        <span>{menuIngredient}</span>
        <div className="flex gap-1 ">
          <span>남은 수량: </span>
          <span>{menuQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;
