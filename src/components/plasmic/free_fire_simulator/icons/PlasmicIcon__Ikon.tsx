// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IkonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IkonIcon(props: IkonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 7A7 7 0 010 7a.5.5 0 011 0 6.01 6.01 0 102.69-5H4a.5.5 0 110 1H2.5a.5.5 0 01-.5-.5V1a.5.5 0 011 0v.257A6.998 6.998 0 0114 7zm-2.5 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.723.584L7.5 6.732V4.5a.5.5 0 00-1 0V7a.5.5 0 00.223.416l1.5 1a.5.5 0 00.554-.832z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IkonIcon;
/* prettier-ignore-end */
