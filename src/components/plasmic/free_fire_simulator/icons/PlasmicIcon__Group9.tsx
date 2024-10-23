// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
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
          "M1.616 1.637l.264-.147c.11-.061.11-.236 0-.297l-.264-.147a.628.628 0 01-.28-.339L1.12.104c-.05-.139-.227-.139-.277 0L.627.707a.628.628 0 01-.28.34l-.265.146c-.11.061-.11.236 0 .297l.264.147a.628.628 0 01.28.34l.217.602c.05.139.227.139.277 0l.216-.603a.628.628 0 01.28-.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
