// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.257 1.325l.206-.12c.085-.049.085-.19 0-.24L1.257.848A.504.504 0 011.04.572L.871.084C.832-.028.695-.028.656.084L.487.572A.504.504 0 01.27.847L.064.966c-.085.05-.085.19 0 .24l.205.119c.1.057.177.155.218.274l.169.488c.039.113.176.113.215 0l.168-.488a.504.504 0 01.218-.274z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
