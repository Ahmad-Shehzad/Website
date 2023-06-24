import { Link } from "react-router-dom";
import "./PrivacyPolicyButton.css";

interface Props {
  index: number;
}

function PrivacyPolicyButton({ index }: Props) {
  const path = "/privacy-policy/" + index;
  return (
    <Link to={path}>
      <div className="privacy-policy-button">Privacy Policy</div>
    </Link>
  );
}

export default PrivacyPolicyButton;
