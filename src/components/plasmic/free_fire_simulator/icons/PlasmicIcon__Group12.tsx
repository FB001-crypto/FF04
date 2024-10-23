// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
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
          "M.898.91l.147-.082c.06-.034.06-.131 0-.165L.898.581A.349.349 0 01.742.393L.622.058C.594-.02.496-.02.468.058l-.12.335A.349.349 0 01.192.58L.046.663c-.061.034-.061.13 0 .165l.146.081a.35.35 0 01.156.189l.12.335c.028.077.126.077.154 0l.12-.335A.349.349 0 01.898.909z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
