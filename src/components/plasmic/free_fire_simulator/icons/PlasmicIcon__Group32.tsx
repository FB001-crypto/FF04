// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group32Icon(props: Group32IconProps) {
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
          "M0 4l.928-.927.933.933-.927.928L0 4zm3.11 0L4 3.11l.887.89L4 4.889l-.888-.89z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.518 4.628l.928.928L4.001 8 2.446 6.445l-.89-.89.929-.927h.005l.884.889h.005l.622.622.628-.622.89-.889zM2.49 3.378l-.933-.934.889-.888L4.002 0l2.444 2.444-.928.928v.006l-.889-.89-.627-.627-.623.628-.889.889zM6.142 4l.929-.929.93.93-.93.928L6.141 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
