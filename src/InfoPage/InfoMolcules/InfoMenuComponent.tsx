//밀키트 메뉴 출력 컴포넌트
//데이터 넣어서 찍어봐야 감 잡을 수 있을 듯요

export type InfoMenuComponentProps = {
  kitName: string;
  kitIngredient: string;
  kitCount: number;
};

const InfoMenuComponent = ({
  kitName,
  kitIngredient,
  kitCount,
}: InfoMenuComponentProps) => {
  return (
    <div className="flex justify-between items-center text-base h-24 gap-1 border">
      <span>{kitName}</span>
      <div className="flex flex-col gap-1 ">
        {/* 이것도 분리해야함 미친거아님?  */}
        <span>{kitIngredient}</span>
        <div className="flex gap-1 ">
          <span>남은 수량: </span>
          <span>{kitCount}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoMenuComponent;
