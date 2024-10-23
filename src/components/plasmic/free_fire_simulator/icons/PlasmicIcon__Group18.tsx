// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group18Icon(props: Group18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.803 4.171l.743-.442c.195-.117.195-.448 0-.564l-.743-.443a1.52 1.52 0 01-.643-.832L2.592.198c-.089-.264-.403-.264-.492 0L1.532 1.89a1.52 1.52 0 01-.643.832l-.743.443c-.195.116-.195.447 0 .564l.743.442c.293.174.522.47.643.833L2.1 6.695c.089.264.403.264.492 0l.568-1.691a1.52 1.52 0 01.643-.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group18Icon;
/* prettier-ignore-end */
