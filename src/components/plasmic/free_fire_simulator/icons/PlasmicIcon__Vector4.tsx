// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.999 3.5c0-.5-1.373-.925-3.197-1.023v-.802h2.277V0H.852v1.675H3.13v.807C1.34 2.585 0 3 0 3.5s1.34.915 3.13 1.02v2.885h1.672V4.522c1.824-.098 3.197-.523 3.197-1.023zm-4 .5C2.042 4 .455 3.696.455 3.321c0-.317 1.137-.582 2.675-.657v.972c.277.015.57.025.87.025.3 0 .547 0 .802-.02V2.66c1.572.07 2.75.34 2.75.66-.008.374-1.595.68-3.553.68z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
