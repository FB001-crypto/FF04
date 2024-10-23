// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.874 3.112l.469-.279c.195-.116.195-.448 0-.564l-.47-.28a1.178 1.178 0 01-.498-.645L1.99.198c-.088-.264-.402-.264-.491 0l-.385 1.146a1.18 1.18 0 01-.499.646l-.469.28c-.195.115-.195.447 0 .563l.47.28c.226.135.404.364.498.645l.385 1.146c.089.264.403.264.491 0l.385-1.146c.094-.28.272-.51.499-.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
