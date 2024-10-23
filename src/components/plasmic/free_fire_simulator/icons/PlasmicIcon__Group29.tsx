// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group29Icon(props: Group29IconProps) {
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
        d={
          "M15.52 5.278l-15.417 4A8.001 8.001 0 0111.727.922a8 8 0 013.793 4.356z"
        }
        fill={"currentColor"}
        opacity={".3"}
      ></path>
    </svg>
  );
}

export default Group29Icon;
/* prettier-ignore-end */
