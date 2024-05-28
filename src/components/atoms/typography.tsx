import { PropsWithChildren } from "react";

export type TypographyAs = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

type Props = {
  as: TypographyAs;
  variant: "h1" | "h2" | "h3" | "body" | "small";
};

const Typography = ({ as: Component = "span", variant, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <Component className={`typography ${variant}`} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
