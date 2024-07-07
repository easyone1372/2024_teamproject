import { useParams } from "react-router-dom";
import InfoHeader from "../InfoMolcules/InfoHeader";
import InfoMenuBox from "../InfoMolcules/InfoMenuBox";
import InfoMiddleBox from "../InfoMolcules/InfoMiddleBox";
import InfoPageBox, { InfoPageBoxProps } from "../InfoMolcules/InfoPageBox";

const InfoPage = () => {
  const { storeId } = useParams<{ storeId: string }>();
  return (
    <div>
      <div className="bg-slate-50 w-screen h-screen">
        <div className="max-w-6xl w-full my-0 mx-auto gap-3.5 bg-white mb-11">
          <InfoHeader />
          <InfoPageBox storeId={Number(storeId)} />
          <InfoMiddleBox storeId={Number(storeId)} />
          <InfoMenuBox storeId={Number(storeId)} />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
