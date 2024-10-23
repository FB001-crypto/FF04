// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer22Icon(props: Layer22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.25 7.845L11.556 10.5l2.692 2.655a.749.749 0 010 1.095.75.75 0 01-1.057 0l-2.693-2.693-2.655 2.693a.75.75 0 01-1.275-.529.75.75 0 01.218-.528L9.442 10.5 6.787 7.845a.75.75 0 011.057-1.057L10.5 9.443l2.655-2.655a.762.762 0 011.095 1.057zm3.674 10.08A10.5 10.5 0 113.076 3.075a10.5 10.5 0 0114.848 14.85zM16.867 4.132A9 9 0 104.16 16.883a9 9 0 0012.706-12.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer22Icon;
/* prettier-ignore-end */
