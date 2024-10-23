// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group31Icon(props: Group31IconProps) {
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
          "M0 3.84l.89-.89.897.896-.89.89L0 3.84zm2.987 0l.853-.853.853.853-.853.853-.853-.853z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.297 4.443l.891.89L3.841 7.68 2.348 6.187l-.853-.854.89-.89h.006l.848.853h.005l.597.597.603-.597.853-.853zm-2.907-1.2l-.895-.896.853-.854L3.841 0l2.347 2.347-.89.89v.006l-.854-.854-.603-.602-.597.602-.853.854zm3.506.597l.892-.891.892.891-.892.892-.892-.892z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group31Icon;
/* prettier-ignore-end */
