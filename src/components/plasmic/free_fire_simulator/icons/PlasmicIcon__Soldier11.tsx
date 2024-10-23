// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Soldier11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Soldier11Icon(props: Soldier11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.288 13.2c-1.052 1.274.006 2.98 1.617 2.775V13.74a3.226 3.226 0 01-1.617-.54zm3.84-1.12l1.048-.673a9.912 9.912 0 015.318-1.57l6.268-.034V7.227c.057-3.156-2.346-6.04-5.629-5.654-.416 0-4.092.155-9.102 5.313L3.158 8.877a2.494 2.494 0 003.115 3.751l.855-.547zm9.245-8.474c2.676.086 2.676 3.964 0 4.05-2.676-.086-2.675-3.964 0-4.05zm-9.679 9.751a3.438 3.438 0 01-.947.332v2.884c.377 9.12 13.377 9.119 13.75 0v-3.705H7.457l-.763.489z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.498 10.679a9.062 9.062 0 00-4.724 1.347h11.78a.123.123 0 00.093-.038.147.147 0 00.05-.105v-1.074a.144.144 0 00-.143-.143c-1.506 0-5.607-.002-7.056.013zm7.624 2.008c-.232.15-.509.214-.783.181v3.107c2.178.259 2.86-2.628.783-3.288zm-4.749-5.873a1.183 1.183 0 000-2.366 1.183 1.183 0 000 2.366z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Soldier11Icon;
/* prettier-ignore-end */
