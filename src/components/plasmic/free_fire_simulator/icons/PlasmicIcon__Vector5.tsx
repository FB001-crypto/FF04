// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.611 2.577l-1.594-1.5L0 0l3.187 7.871 4.424-5.309v.015zm-2.934.165l1.197-.977.69.642-1.892.335h.005zM1.58.885l2.222 1.807 1.41-1.15L1.58.88v.005zm-.408.427L3.52 3.227l-.374 2.98-1.978-4.895h.005zm2.572 4.965l.35-2.83 2.372-.425-2.722 3.25v.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
