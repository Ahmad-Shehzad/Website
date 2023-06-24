import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import "./components/Heading.css";
import MainImage from "./components/MainImage";
import Paragraph from "./components/Paragraph";
import PrivacyPolicyButton from "./components/PrivacyPolicyButton";

function MoreInfo() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(data[0]);
  const index = parseInt(id ?? "", 10);

  useEffect(() => {
    const projectDetails = data[index];
    setProjectDetails(projectDetails);
  }, [id]);

  return (
    <div>
      <MainImage>{projectDetails.imageUrl}</MainImage>
      <h1 className="heading">{projectDetails.name}</h1>
      {projectDetails.details.map((details) => (
        <Paragraph paragraph={details}></Paragraph>
      ))}
      <PrivacyPolicyButton index={index}></PrivacyPolicyButton>
    </div>
  );
}

export default MoreInfo;
