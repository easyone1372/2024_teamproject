import InfoPageList from "../InfoMolcules/InfoPageList";
import InfoPageComponent from "../InfoMolcules/InfoPageComponent";
import InfoMenuList from "../InfoMolcules/InfoMenuList";
import InfoHeader from "../InfoMolcules/InfoHeader";

const InfoPage = () => {
  return (
    <div>
      <div className="bg-slate-50 w-screen h-screen">
        <div className="max-w-6xl w-full my-0 mx-auto gap-3.5 bg-white mb-11">
          <InfoHeader />
          <InfoPageList />
          <InfoMenuList />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
