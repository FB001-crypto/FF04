// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bottom3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bottom3Icon(props: Bottom3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.325 4.135c.333-.158.579-.364.735-.618.157-.255.235-.575.235-.962V2.06s-.298-.542-.558-.746C3.366 1.022 2.85.875 2.19.875H0v5.564h1.341V4.47h.726l.982 1.968h1.437v-.495l-1.161-1.81v.001zm-.56-.897c-.129.134-.32.201-.575.201h-.848V1.907h.848c.252 0 .443.069.573.205.13.137.195.325.195.565 0 .24-.064.427-.193.561zM7.027 1.77c.189 0 .334.07.436.213.102.143.153.347.153.612h1.291V2.1s-.235-.51-.4-.703C8.243 1.082 7.876.89 7.41.822V0h-.607v.806c-.484.046-.872.208-1.162.487-.2.192-.436.57-.436.57v.495c0 .257.041.476.123.657.081.18.198.34.351.478.153.137.335.258.547.363.211.104.442.207.691.309.25.102.424.21.524.325.1.114.149.272.149.473 0 .181-.05.323-.15.426a.541.541 0 01-.408.155c-.237 0-.42-.076-.548-.227-.13-.152-.194-.373-.194-.664l-1.287-.495v.495c0 .528.148.953.445 1.275.297.322.723.512 1.278.571v.772h.607v-.768c.477-.046.853-.206 1.13-.482.276-.275.414-.63.414-1.066V4.46s-.094-.09-.13-.166a1.508 1.508 0 00-.359-.482 2.575 2.575 0 00-.544-.369c-.21-.108-.434-.212-.67-.313-.238-.1-.41-.206-.517-.317a.618.618 0 01-.16-.45c0-.188.046-.331.139-.437a.494.494 0 01.392-.158v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bottom3Icon;
/* prettier-ignore-end */
