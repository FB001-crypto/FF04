// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.664 1.775l.325-.188c.085-.05.085-.19 0-.24l-.325-.188a.65.65 0 01-.282-.355l-.248-.72c-.039-.112-.176-.112-.215 0L.67.804a.65.65 0 01-.281.355l-.325.188c-.085.05-.085.19 0 .24l.325.188a.65.65 0 01.281.355l.249.72c.039.112.176.112.215 0l.248-.72a.65.65 0 01.282-.355z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
