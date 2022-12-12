import * as React from "react";

interface Props {
  onClick: () => void;
  lable:string;
}

const Button: React.FC<Props> = (props) => {
  return <button {...props}>{props.lable}</button>;
};

export default Button;
