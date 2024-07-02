//영업중인 시간, 요일 받아와서 출력하기
//월화수목금 다 다른 시간일경우
//db.에서 list로 받아와서 map 돌려서 화면에 출력
//그럼 molcules에서 map 돌리는 식
//요소만 만들기
//만약 오늘 요일이라고 하면!? bold를 줘야하는데 그렇게가 가능한가?
//넣어도 되고 빼도 되고 곰곰..곰...곰......곰문곰문...

//가능하게 되면 영업시간 - 영업중 표시할 수 있도록 분리하기
type InfoDayDetailProps = {
  dayInfo: string;
  dayTimeInfo: string;
};

const InfoDayDetail = ({ dayInfo, dayTimeInfo }: InfoDayDetailProps) => {
  return (
    <div className="flex w-full gap-1 text-sm font-normal justify-between">
      <div>{dayInfo}</div>
      <div>{dayTimeInfo}</div>
    </div>
  );
};
export default InfoDayDetail;
