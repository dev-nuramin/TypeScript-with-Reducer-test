import { buttonProps } from "../types/Types";

const ButtonComponent = ({ children, handleButtonClick }: buttonProps) => {
  
  return (
    <>
      <button onClick={(event) => handleButtonClick(event, 12)}>
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
