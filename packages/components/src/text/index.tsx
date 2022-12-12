import * as React from "react";

interface Props {
  lable:string;
}

const Text: React.FC<Props> = (props) => {
  return <p>{props.lable}</p>;
};

export default Text;
