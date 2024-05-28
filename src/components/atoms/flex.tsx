import { PropsWithChildren } from "react";

export type As = "div" | "span";

type Props = {
  as: As;
  display?: "flex";
  dir?: "column" | "row";
  justify?: "center" | "space-between" | "space-around" | "start" | "end";
};

const Flex = ({ as: Component = "span", dir = "row", justify, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Component className={`flex ${dir} ${justify}`} {...rest}>
      {children}
    </Component>
  );
};

export default Flex;
