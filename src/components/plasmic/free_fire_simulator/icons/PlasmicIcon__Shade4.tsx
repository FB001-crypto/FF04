// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shade4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shade4Icon(props: Shade4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        d={
          "M4.07 2.918l-.962.961h-.612v.613L1.155 5.833V2.847h2.19c.264 0 .506.024.724.071zm.526 3.417L5.64 8.354v.057H4.204l-.56-1.123.952-.953zm2.848.292c0 .036.001.071.003.105.003.034-.988.989-.988.989-.202-.295-.302-.66-.302-1.094h1.287zM7.79 3.9c-.093.106-.14.252-.14.438s.054.338.16.45c.108.11.28.216.517.316.178.076.35.154.514.235l-.79.79c-.243-.099-.466-.2-.672-.3a2.413 2.413 0 01-.546-.364 1.421 1.421 0 01-.351-.478 1.406 1.406 0 01-.111-.427l2.193-2.192v.426c.466.07.833.26 1.098.575.186.22.308.482.363.785l-.413.413H8.77c0-.265-.051-.469-.153-.611a.504.504 0 00-.436-.214.495.495 0 00-.391.158zM1.154 8.014l1.342-1.34V7.81l-.602.601h-.74v-.397zM5.45 4.527c0 .125-.009.243-.025.354l-1.99 1.99-.213-.428h-.497l2.597-2.597c.085.2.127.427.127.681zm1.345-1.261c.172-.165.378-.29.618-.373l-.996.996a1.36 1.36 0 01.378-.623zm1.538-1.294l-.377.378v-.378h.377zM7.88 9.007v-.535a2.657 2.657 0 01-.503-.1l.857-.857a.52.52 0 00.36-.153.558.558 0 00.147-.353l1.003-1.003c.06.081.113.168.158.261.078.166.12.363.128.59l-2.15 2.15z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".25"}
        d={
          "M10.836 2.15a14.976 14.976 0 00-8.914 8.529 6.117 6.117 0 01-.405-.322 6.268 6.268 0 018.84-8.84c.172.2.332.411.479.632z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shade4Icon;
/* prettier-ignore-end */
