import "./SummaryText.css";

interface Props {
  text: string;
}

function SummaryText({ text }: Props) {
  return <div className="summary-text">{text}</div>;
}

export default SummaryText;
