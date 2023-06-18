import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MoreInfo.css";

interface Props {
  onClick: () => void;
}

function MoreInfo({ onClick }: Props) {
  return (
    <div onClick={onClick} className="more-info">
      <div className="more-info-text">More Info</div>
      <FontAwesomeIcon className="more-info-arrow" icon={faArrowRight} />
    </div>
  );
}

export default MoreInfo;
