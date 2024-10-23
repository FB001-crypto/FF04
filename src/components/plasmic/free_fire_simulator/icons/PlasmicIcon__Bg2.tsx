// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bg2Icon(props: Bg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 65 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h64.807v18H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Bg2Icon;
/* prettier-ignore-end */
