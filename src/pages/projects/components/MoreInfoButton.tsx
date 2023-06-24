import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MoreInfoButton.css";
import { Link } from "react-router-dom";

interface Props {
  index: number;
}

function MoreInfoButton({ index }: Props) {
  const path = "/more-info/" + index;
  return (
    <Link to={path}>
      <div className="more-info">
        <div className="more-info-text">More Info</div>
        <FontAwesomeIcon className="more-info-arrow" icon={faArrowRight} />
      </div>
    </Link>
  );
}

export default MoreInfoButton;
