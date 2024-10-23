// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group19Icon(props: Group19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.667 0h8c1.466 0 2.666 1.2 2.666 2.667a2.616 2.616 0 01-1.666 2.466V2.667c0-.267-.134-.534-.267-.734-.133-.2-.467-.266-.733-.266h-8c-.267 0-.534.133-.734.266-.2.134-.266.467-.266.734v2.466C.667 4.733 0 3.8 0 2.667 0 1.2 1.2 0 2.667 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.667 2.667v8c0 .733-.6 1.333-1.334 1.333H4c-.733 0-1.333-.6-1.333-1.333v-8h8zm-5 5l.466.466v-2.8c0-.266.2-.533.534-.533.333 0 .533.2.533.533v2.8l.467-.466c.2-.2.533-.2.733 0 .2.2.2.533 0 .733l-.867.867c-.466.466-1.2.466-1.666 0L5 8.4c-.2-.2-.2-.533 0-.733.2-.2.467-.2.667 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group19Icon;
/* prettier-ignore-end */
