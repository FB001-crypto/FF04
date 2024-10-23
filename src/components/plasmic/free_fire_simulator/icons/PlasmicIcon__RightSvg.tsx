// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RightSvgIcon(props: RightSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"19"}>
        <path
          d={
            "M12 19a1 1 0 01-.71-1.71l5.3-5.29-5.3-5.29A1 1 0 0112.7 5.3l6 6a1 1 0 010 1.41l-6 6a1 1 0 01-.7.29z"
          }
        ></path>

        <path
          d={
            "M6 19a1 1 0 01-.71-1.71l5.3-5.29-5.3-5.29a1 1 0 011.42-1.42l6 6a1 1 0 010 1.41l-6 6A1 1 0 016 19z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default RightSvgIcon;
/* prettier-ignore-end */
