import { PropsWithChildren } from "react";

export type TypographyAs = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

type Props = {
  as: TypographyAs;
};

const Typography = ({
  as: Component = "span",

  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Component className="typography" {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
