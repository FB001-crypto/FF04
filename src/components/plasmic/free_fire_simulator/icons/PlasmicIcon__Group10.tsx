// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
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
          "M2.14 2.194l.417-.233c.11-.061.11-.236 0-.297l-.418-.232a.81.81 0 01-.362-.438l-.32-.89c-.049-.139-.226-.139-.276 0l-.319.89a.81.81 0 01-.362.438l-.418.232c-.11.061-.11.236 0 .297l.418.233a.81.81 0 01.362.437l.32.89c.05.139.226.139.276 0l.32-.89a.81.81 0 01.361-.437z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
