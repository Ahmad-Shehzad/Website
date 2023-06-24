import CardImage from "./CardImage";
import MoreInfoButton from "./MoreInfoButton";
import "./ProjectCard.css";
import SummaryText from "./SummaryText";

interface Props {
  image: string;
  summary: string;
  index: number;
}

function ProjectCard({ image, summary, index }: Props) {
  return (
    <div className="projectCard">
      <div className="overlay"></div>
      <CardImage>{image}</CardImage>
      <SummaryText text={summary} />
      <MoreInfoButton index={index} />
    </div>
  );
}

export default ProjectCard;
