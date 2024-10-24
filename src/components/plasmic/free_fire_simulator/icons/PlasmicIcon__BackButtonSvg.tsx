// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackButtonSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackButtonSvgIcon(props: BackButtonSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 219.151 219.151"}
      xmlSpace={"preserve"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576C219.149 49.156 169.995 0 109.576 0S.002 49.156.002 109.575c0 60.42 49.155 109.576 109.574 109.576zm0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15z"
        }
      ></path>

      <path
        d={
          "M94.861 156.507a7.502 7.502 0 0010.606 0 7.499 7.499 0 00-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 00-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 00-10.607-10.608l-41.629 41.628a7.495 7.495 0 00-2.197 5.303 7.51 7.51 0 002.198 5.305l41.627 41.624z"
        }
      ></path>
    </svg>
  );
}

export default BackButtonSvgIcon;
/* prettier-ignore-end */
