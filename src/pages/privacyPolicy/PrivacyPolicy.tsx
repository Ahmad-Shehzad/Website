import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(data[0]);
  const index = parseInt(id ?? "", 10);

  useEffect(() => {
    const projectDetails = data[index];
    setProjectDetails(projectDetails);
  }, [id]);
  return (
    <div>
      <div className="privacy-policy-title">
        {projectDetails.name} Privacy Policy
      </div>
      {projectDetails.privacyPolicy.map((paragraph) => (
        <div className="privacy-policy-text">{paragraph}</div>
      ))}
    </div>
  );
}

export default PrivacyPolicy;
