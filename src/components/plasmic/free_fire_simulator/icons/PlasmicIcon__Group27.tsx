// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
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
          "M7.984 15.992a8.048 8.048 0 01-1.935-.25 7.999 7.999 0 01-5.814-9.68A7.999 7.999 0 0114.85 3.875a7.998 7.998 0 01-6.866 12.116zm0-14.498a6.499 6.499 0 00-6.302 4.93A6.499 6.499 0 1014.29 9.566a6.499 6.499 0 00-6.306-8.072z"
        }
        fill={"currentColor"}
        opacity={".24"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
