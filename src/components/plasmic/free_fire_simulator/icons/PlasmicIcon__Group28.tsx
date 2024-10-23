// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
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
          "M7.984 15.995a8.053 8.053 0 01-1.935-.25A8 8 0 01.235 6.062 8 8 0 0111.405.764a8 8 0 013.445 3.113 8 8 0 01-6.866 12.118zm0-14.5a6.498 6.498 0 00-6.302 4.93 6.501 6.501 0 009.69 7.29 6.499 6.499 0 002.916-4.148 6.501 6.501 0 00-6.304-8.072z"
        }
        fill={"currentColor"}
        opacity={".24"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
