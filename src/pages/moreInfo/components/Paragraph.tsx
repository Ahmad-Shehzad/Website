import "./Paragraph.css";

interface Props {
  paragraph: Details;
}

function Paragraph({ paragraph }: Props) {
  return (
    <div className="paragraph">
      <div className="paragraph-title">{paragraph.title}</div>
      <div className="paragraph-text">{paragraph.content}</div>
    </div>
  );
}

export default Paragraph;
