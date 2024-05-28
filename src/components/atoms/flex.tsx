import React, { PropsWithChildren } from "react";

export type As = "div" | "span";

type Props = {
  as: As;
  display?: "flex";
  dir?: "column" | "row";
};

const Flex = ({ as: Component = "span", dir = "row", children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Component className={`flex ${dir}`} {...rest}>
      {children}
    </Component>
  );
};

export default Flex;
