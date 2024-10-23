// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.98 15.998a8.048 8.048 0 01-1.935-.25A7.998 7.998 0 013.863 1.145a7.999 7.999 0 114.116 14.852zm0-14.498a6.499 6.499 0 00-6.302 4.929 6.499 6.499 0 1012.608 3.144A6.516 6.516 0 007.979 1.5z"
        }
        fill={"currentColor"}
        opacity={".24"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
