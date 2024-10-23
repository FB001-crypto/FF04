// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Edit1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Edit1Icon(props: Edit1IconProps) {
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

      <g clipPath={"url(#gubhrQa7U6qSa)"} fill={"currentColor"}>
        <path
          d={
            "M12.667 8.03a.666.666 0 00-.667.667v5.334a.667.667 0 01-.667.666H2a.667.667 0 01-.667-.666V4.697c0-.367.299-.666.667-.666h5.333a.666.666 0 100-1.334H2c-1.103 0-2 .898-2 2v9.334c0 1.102.897 2 2 2h9.333c1.103 0 2-.898 2-2V8.697a.666.666 0 00-.666-.666z"
          }
        ></path>

        <path
          d={
            "M6.25 7.423a.337.337 0 00-.09.17l-.472 2.358a.335.335 0 00.393.392l2.356-.472a.332.332 0 00.171-.091l5.275-5.275-2.357-2.356-5.275 5.274zM15.512.519a1.668 1.668 0 00-2.357 0l-.922.922 2.356 2.357.923-.923A1.65 1.65 0 0016 1.697c0-.445-.173-.864-.488-1.178z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"gubhrQa7U6qSa"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Edit1Icon;
/* prettier-ignore-end */
