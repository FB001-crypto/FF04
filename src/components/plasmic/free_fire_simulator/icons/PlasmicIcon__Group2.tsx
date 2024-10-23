// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.616 1.75l.264-.156c.11-.066.11-.252 0-.318l-.264-.157a.663.663 0 01-.28-.363L1.12.111c-.05-.148-.227-.148-.277 0L.627.756a.663.663 0 01-.28.363l-.265.157c-.11.066-.11.252 0 .318l.264.157a.663.663 0 01.28.363l.217.645c.05.148.227.148.277 0l.216-.645a.663.663 0 01.28-.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
