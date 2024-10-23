// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22Icon(props: Group22IconProps) {
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
          "M1.426 1.564l.279-.166c.073-.043.073-.168 0-.211l-.279-.166a.57.57 0 01-.241-.312L.972.074C.939-.025.82-.025.788.074L.575.71a.57.57 0 01-.242.312l-.278.166c-.073.043-.073.168 0 .211l.278.166a.57.57 0 01.242.312l.213.635c.033.099.15.099.184 0l.213-.635a.57.57 0 01.241-.312z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
