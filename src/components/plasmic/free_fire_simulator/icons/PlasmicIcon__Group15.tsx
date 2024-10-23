// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4.345 9.92v.001c.01-.011.01-.01 0 0z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.601 7.433l-.895-.215a7.837 7.837 0 00-.998-2.408l.453-.762a.528.528 0 00-.08-.642l-1.487-1.487a.528.528 0 00-.642-.08l-.762.454a7.84 7.84 0 00-2.408-.999L10.567.4a.528.528 0 00-.511-.4h-2.11a.527.527 0 00-.51.4l-.216.894a7.84 7.84 0 00-2.408.999l-.761-.454a.527.527 0 00-.643.08L1.922 3.406a.527.527 0 00-.08.642l.453.762a7.839 7.839 0 00-.999 2.408l-.895.215a.527.527 0 00-.399.511v2.11c0 .241.165.453.4.51l.895.216c.13.563.325 1.104.576 1.623.387-.39 2.332-2.343 2.472-2.482a16.392 16.392 0 01-.084-.843 4.74 4.74 0 014.742-4.824 4.726 4.726 0 014.738 4.761c-.011 2.434-1.828 4.506-4.365 4.695-.11.009-.606.082-1.298-.054L5.604 16.13c.517.25 1.055.444 1.616.573l.215.896a.527.527 0 00.512.399h2.109a.527.527 0 00.511-.4l.215-.895a7.837 7.837 0 002.408-.998l.762.454c.206.123.471.09.642-.08l1.487-1.487a.527.527 0 00.08-.643l-.454-.761a7.82 7.82 0 00.999-2.409l.894-.214c.235-.058.4-.27.4-.512V7.944a.527.527 0 00-.399-.511z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.569 8.035a.52.52 0 00-.873-.24L10.492 9a1.055 1.055 0 01-1.49-1.491l1.203-1.204a.522.522 0 00-.24-.874c-2.225-.565-4.227.884-4.594 2.886a3.733 3.733 0 00.15 1.92L.463 15.294a1.59 1.59 0 00.01 2.253c.622.59 1.575.615 2.233-.01l5.058-5.058c.81.289 1.714.283 2.598-.029 1.593-.562 2.708-2.449 2.207-4.415z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
