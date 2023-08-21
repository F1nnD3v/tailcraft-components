import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const gotoAllComponentsPage = () => {
    navigate("/all")
  };

  const gotoDemoPage = () => {
    navigate("/demo")
  }

  return (
    <>
      <div className="text-center text-2xl font-bold">
        Welcome To <p>Tailcraft Components</p>
      </div>
      <div className="flex justify-center items-center mt-10 flex-col gap-2">
        <Button size="medium" onClick={() => gotoAllComponentsPage()}>
          See all components
        </Button>
        <Button size="medium" onClick={() => gotoDemoPage()}>Demo page</Button>
      </div>
    </>
  );
};

export default Welcome;
