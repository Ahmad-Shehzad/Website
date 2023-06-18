import CardImage from "./CardImage";
import MoreInfo from "./MoreInfo";
import "./ProjectCard.css";
import SummaryText from "./SummaryText";

interface Props {
  image: string;
  summary: string;
  onClickMoreInfo: () => void;
}

function ProjectCard({ image, summary, onClickMoreInfo }: Props) {
  return (
    <div className="projectCard">
      <div className="overlay"></div>
      <CardImage>{image}</CardImage>
      <SummaryText text={summary} />
      <MoreInfo onClick={onClickMoreInfo} />
    </div>
  );
}

export default ProjectCard;
