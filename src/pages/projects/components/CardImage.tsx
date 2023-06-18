import "./CardImage.css";

interface Props {
  children: string;
}

function CardImage({ children }: Props) {
  return (
    <div className="positioned-element">
      <img src={children} alt="App Image" />
    </div>
  );
}

export default CardImage;
