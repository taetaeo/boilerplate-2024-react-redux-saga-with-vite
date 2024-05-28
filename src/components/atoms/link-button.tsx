import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
};

const LinkButton = ({ href = "", children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
