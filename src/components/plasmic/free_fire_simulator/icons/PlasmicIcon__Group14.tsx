// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
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
        d={
          "M9 0a9 9 0 100 18A9 9 0 009 0zm1.873 13.948a29.79 29.79 0 01-1.108.418c-.31.101-.636.15-.962.144-.56 0-.997-.137-1.308-.411a1.325 1.325 0 01-.466-1.042c0-.163.012-.33.035-.502a6.27 6.27 0 01.112-.578l.58-2.048c.05-.196.095-.383.13-.557a2.47 2.47 0 00.052-.482c0-.26-.055-.444-.162-.546-.109-.103-.314-.154-.62-.154-.149 0-.303.023-.46.07a6.547 6.547 0 00-.403.133l.153-.63c.38-.155.743-.288 1.09-.398.316-.106.648-.162.982-.166.557 0 .987.136 1.29.404.3.269.452.619.452 1.048 0 .09-.01.247-.031.47a3.15 3.15 0 01-.116.618l-.577 2.042a5.778 5.778 0 00-.127.561c-.032.157-.05.317-.056.477 0 .271.06.456.182.555.12.098.332.147.63.147.141 0 .299-.025.477-.073a2.93 2.93 0 00.386-.13l-.155.63zm-.102-8.288a1.377 1.377 0 01-.971.375 1.39 1.39 0 01-.976-.375 1.196 1.196 0 01-.406-.909c0-.354.137-.659.406-.911a1.38 1.38 0 01.976-.379c.378 0 .703.126.971.379.269.252.404.557.404.911 0 .356-.135.66-.404.91z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
