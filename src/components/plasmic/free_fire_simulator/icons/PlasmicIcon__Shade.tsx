// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShadeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShadeIcon(props: ShadeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        d={
          "M10.603.628L.628 10.6a7.497 7.497 0 01-.606-2.469L8.132.02a7.617 7.617 0 012.471.61zm3.578 3.232L3.86 14.18a7.565 7.565 0 01-1.734-1.343L12.841 2.125c.525.506.978 1.09 1.34 1.734zm-1.65-2.02L1.844 12.529a8.05 8.05 0 01-.472-.606L11.925 1.369c.21.147.412.306.606.472zm2.388 3.848l-9.232 9.23a7.97 7.97 0 01-.815-.259l9.787-9.787c.1.266.188.537.26.816z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".5"}
        d={
          "M15.156 7.578c0 .053 0 .103-.003.156A7.575 7.575 0 007.578.313 7.575 7.575 0 00.003 7.734c0-.053-.003-.103-.003-.156a7.58 7.58 0 0115.156 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".5"}
        d={
          "M13.734 7.906A5.939 5.939 0 013.22 11.688a5.939 5.939 0 008.937-7.813 5.924 5.924 0 011.578 4.031z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShadeIcon;
/* prettier-ignore-end */
