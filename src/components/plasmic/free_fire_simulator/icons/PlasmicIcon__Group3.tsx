// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.14 2.346l.417-.249c.11-.065.11-.251 0-.317l-.418-.249a.855.855 0 01-.362-.468L1.457.11c-.049-.148-.226-.148-.276 0l-.319.952A.855.855 0 01.5 1.53l-.418.25c-.11.065-.11.251 0 .316l.418.25a.855.855 0 01.362.468l.32.951c.05.149.226.149.276 0l.32-.951a.855.855 0 01.361-.469z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
