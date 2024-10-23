// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shade3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shade3Icon(props: Shade3IconProps) {
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
        opacity={".5"}
        d={
          "M11.17.64L.64 11.17A7.954 7.954 0 010 8.564L8.563 0c.921.066 1.8.29 2.608.64zm3.78 3.412L4.052 14.95a8.03 8.03 0 01-1.83-1.417l11.31-11.312a8.022 8.022 0 011.417 1.831zm-1.744-2.129L1.923 13.206a7.883 7.883 0 01-.498-.639L12.567 1.425c.221.155.435.321.64.498zm2.522 4.059l-9.745 9.746a7.974 7.974 0 01-.863-.275L15.453 5.12c.107.28.2.568.274.863z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".5"}
        d={
          "M14.478 8.325a6.268 6.268 0 01-11.1 3.992 6.268 6.268 0 009.434-8.248 6.245 6.245 0 011.666 4.256z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shade3Icon;
/* prettier-ignore-end */
