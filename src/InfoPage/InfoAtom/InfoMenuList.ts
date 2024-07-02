export type InfoMenuListProps = {
  menuName: string;
  menuIngredient: string;
  menuQuantity: number;
};

//db에서 데이터 받아와서 집어넣어야할듯?
//어케하더라
//찾아보기

export const InfoMenuList: InfoMenuListProps[] = [
  //  menuName:,
  //  menuIngredent,
  //  menuQuantity,
  {
    menuName: "스파게티",
    menuIngredient: "면, 토마토 소스, 파마산 치즈",
    menuQuantity: 2,
  },
  {
    menuName: "샐러드",
    menuIngredient: "양상추, 토마토, 오이",
    menuQuantity: 2,
  },
];
