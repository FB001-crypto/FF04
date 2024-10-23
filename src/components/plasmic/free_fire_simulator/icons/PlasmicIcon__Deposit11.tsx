// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Deposit11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Deposit11Icon(props: Deposit11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M12 2H4a2.675 2.675 0 00-2.667 2.667C1.333 5.8 2 6.733 3 7.133V4.667c0-.267.133-.534.267-.734.133-.2.466-.266.733-.266h8c.267 0 .533.133.733.266.2.134.267.467.267.734v2.466c1-.4 1.667-1.333 1.667-2.466C14.667 3.2 13.467 2 12 2zm0 10.667v-8H4v8C4 13.4 4.6 14 5.333 14h5.334C11.4 14 12 13.4 12 12.667zm-4.533-4.4L7 8.733c-.2.2-.533.2-.733 0-.2-.2-.2-.533 0-.733l.866-.867a1.167 1.167 0 011.667 0L9.667 8c.2.2.2.533 0 .733-.2.2-.534.2-.734 0l-.466-.466v2.8c0 .266-.2.533-.534.533-.333 0-.533-.2-.533-.533v-2.8h.067z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Deposit11Icon;
/* prettier-ignore-end */
