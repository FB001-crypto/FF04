// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Enter2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Enter2SvgIcon(props: Enter2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M16.5 3a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H12v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V5a2 2 0 012-2zM12 23.5V27h4.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H12a2 2 0 01-2-2v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5zM2 17v-2a.5.5 0 01.5-.5H12v-3.146c0-.131.158-.196.25-.104l4.638 4.638a.158.158 0 010 .222l-4.638 4.64a.147.147 0 01-.25-.104V17.5H2.5A.5.5 0 012 17zM29.22 4.854l-9.512-2.831a.546.546 0 00-.708.513v26.919c0 .365.36.626.717.52l9.503-2.829a1.08 1.08 0 00.78-1.03V5.884a1.08 1.08 0 00-.78-1.03zM23 17a1 1 0 11-2 0v-2a1 1 0 112 0z"
        }
      ></path>
    </svg>
  );
}

export default Enter2SvgIcon;
/* prettier-ignore-end */
