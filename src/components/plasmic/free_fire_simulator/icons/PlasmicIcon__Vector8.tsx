// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.374.53a.887.887 0 00-.43-.398 1.25 1.25 0 00-.535-.13H1.207a1 1 0 00-.562.13.847.847 0 00-.5.435 1.03 1.03 0 00-.14.63c.016.203.087.398.208.563l3.23 5.632a.445.445 0 00.359.193.387.387 0 00.367-.193L7.42 1.76c.113-.179.168-.387.157-.598A1.345 1.345 0 007.374.53zM3.392 5.635L.91 1.3l-.097-.193A.25.25 0 01.845.935a.25.25 0 01.132-.13h2.415v4.83zm3.315-4.5a.46.46 0 010 .202L4.169 5.655V.827h2.205a.455.455 0 01.23.035l.035.035c.035 0 .035.063.068.063a.265.265 0 010 .165v.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
