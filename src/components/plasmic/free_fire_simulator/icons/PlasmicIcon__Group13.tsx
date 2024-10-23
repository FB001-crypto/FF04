// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.188 1.219l.233-.13c.06-.034.06-.13 0-.164l-.233-.13a.45.45 0 01-.2-.243L.81.058C.782-.02.684-.02.656.058L.48.552a.45.45 0 01-.201.243l-.232.13c-.061.034-.061.13 0 .164l.232.13a.45.45 0 01.2.243l.178.494c.028.077.126.077.154 0l.177-.494a.45.45 0 01.201-.243z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
