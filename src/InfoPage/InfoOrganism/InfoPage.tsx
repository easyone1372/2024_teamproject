import InfoMenuBox from "../InfoMolcules/InfoMenuBox";
import InfoMiddleBox from "../InfoMolcules/InfoMiddleBox";
import InfoPageBox, { InfoPageBoxProps } from "../InfoMolcules/InfoPageBox";

const InfoPage = ({ storeId }: InfoPageBoxProps) => {
  return (
    <div>
      <div className="bg-slate-50 w-screen h-screen">
        <div className="max-w-6xl w-full my-0 mx-auto gap-3.5 bg-white mb-11">
          {/*<InfoHeader />*/}
          <InfoPageBox storeId={storeId} />
          <InfoMiddleBox storeId={storeId} />
          <InfoMenuBox />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
