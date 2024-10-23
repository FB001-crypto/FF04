// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.962 3.416h-.69v1.868H0V0h2.078c.628 0 1.116.138 1.469.416.353.278.531.671.531 1.178 0 .368-.075.672-.222.912-.147.24-.381.438-.7.588L4.26 5.228v.053H2.894l-.932-1.865zm-.687-.982h.806c.24 0 .425-.062.547-.19.122-.128.184-.307.184-.535 0-.228-.062-.406-.184-.537S2.322.978 2.084.978h-.806v1.456h-.003zm7.163.916c0 .61-.138 1.097-.413 1.46a1.324 1.324 0 01-1.113.546c-.359 0-.656-.131-.89-.397v1.832H4.8V1.353h1.144l.037.363a1.13 1.13 0 01.925-.435c.485 0 .86.178 1.128.535.27.356.403.847.403 1.472v.062zm-1.222-.075c0-.697-.204-1.044-.61-1.044-.29 0-.484.103-.581.313V4.09c.106.218.303.328.587.328.391 0 .591-.338.604-1.01v-.134z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
