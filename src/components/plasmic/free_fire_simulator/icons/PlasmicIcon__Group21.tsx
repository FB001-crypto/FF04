// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.078 1.167l.176-.105c.073-.043.073-.168 0-.211L1.078.746A.442.442 0 01.89.504L.746.074c-.033-.099-.15-.099-.184 0l-.144.43A.442.442 0 01.23.746L.055.851c-.073.043-.073.168 0 .211l.176.105c.085.05.151.137.187.242l.144.43c.033.1.151.1.184 0l.145-.43a.442.442 0 01.187-.242z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
