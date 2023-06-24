import "./MainImage.css";

interface Props {
  children: string;
}

function MainImage({ children }: Props) {
  return (
    <div className="main-image">
      <img src={children} alt="App Image" />
    </div>
  );
}

export default MainImage;
