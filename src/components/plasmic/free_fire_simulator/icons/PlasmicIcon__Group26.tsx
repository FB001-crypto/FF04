// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M15.52 5.275L.103 9.277a7.999 7.999 0 0115.417-4v-.002z"}
        fill={"currentColor"}
        opacity={".3"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
