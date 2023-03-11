import { ReactElement } from "react";

//type of props
type HeadingProps = { title: string };

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
