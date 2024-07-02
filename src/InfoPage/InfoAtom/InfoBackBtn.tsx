import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const InfoBackBtn = () => {
  const back = useNavigate();
  const backBtn = () => {
    back("/");
  };
  return (
    <div className="text-lg" onClick={backBtn}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default InfoBackBtn;
