// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
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
          "M3.156 3.094c.316-.15.55-.347.7-.588.15-.24.222-.547.222-.912v-.469s-.284-.516-.531-.71C3.194.139 2.703 0 2.078 0H0v5.284h1.275V3.416h.69L2.9 5.284h1.366v-.468l-.257-.079-.853-1.643zm-.531-.853c-.122.128-.303.19-.547.19h-.806V.975h.806c.24 0 .422.066.544.194.122.128.184.31.184.537 0 .228-.06.406-.181.535zm5.409-.425c-.268-.357-.643-.535-1.128-.535-.381 0-.69.144-.925.435l-.037-.363H4.8v5.438h1.222V4.959c.231.263.528.397.89.397.466 0 .838-.181 1.113-.547.275-.362.412-.85.412-1.459v-.528c0-.003-.203-.738-.403-1.006zM7.216 3.4c-.013.672-.213 1.01-.604 1.01-.284 0-.48-.11-.587-.329V2.534c.097-.209.29-.312.581-.312.407 0 .61.347.61 1.044V3.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
