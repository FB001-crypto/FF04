// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer2Icon(props: Layer2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.258 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7.5a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.258 22.5a11.251 11.251 0 01-8.693-4.117l-.39-.48.39-.473a11.25 11.25 0 0117.385 0l.39.473-.39.48a11.25 11.25 0 01-8.692 4.117zM4.14 17.91a9.75 9.75 0 0014.25 0 9.75 9.75 0 00-14.25 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.258 22.5A11.25 11.25 0 1111.242.001a11.25 11.25 0 01.015 22.499zm0-21a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.143 17.91s7.552 8.438 15.24.84l.99-.84s-6.42-6.66-12.938-2.662L3.143 17.91zm8.115-6.66a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer2Icon;
/* prettier-ignore-end */
