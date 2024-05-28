import React, { PropsWithChildren } from "react";

type Props = {
  variant: "primary" | "secondary" | "default";
};

const Button = ({ variant, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
