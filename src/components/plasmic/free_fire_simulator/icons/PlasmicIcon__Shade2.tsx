// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shade2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shade2Icon(props: Shade2IconProps) {
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
          "M4.26 2.36l-.85.85c-.026-.004-.054-.004-.079-.004h-.806v.888L1.25 5.369V2.29l.066-.066H3.33c.35.003.663.047.928.134zm.359 3.374l.89 1.722v.056H4.147l-.435-.868.907-.91zm4.706-1.628l-.906.907c-.082-.372-.269-.557-.566-.557-.297 0-.484.103-.581.313v1.387L6.05 7.378V4.3l.719-.719h.425l.037.363a1.13 1.13 0 01.925-.435c.485 0 .86.179 1.128.535.016.022.028.044.041.062zM1.25 7.434l1.275-1.272v1.075l-.275.276h-1v-.079zm4.078-3.609c0 .287-.047.537-.137.747l-.722.722c-.019.01-.04.019-.06.028l.01.022-.903.903-.3-.603h-.172l2.24-2.24c.029.13.044.268.044.421zm.85-.241l-.128.128v-.128h.128zM6.05 8.869l1.225-1.225v1.078l-.3.3H6.05v-.153zm3.638-3.35v.06c0 .312-.035.59-.11.837L8.434 7.562a1.51 1.51 0 01-.268.022c-.244 0-.46-.062-.647-.184l2.16-2.16c.005.091.008.185.008.279z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".25"}
        d={
          "M10.266 2.034a14.193 14.193 0 00-8.444 8.082 5.865 5.865 0 01-.385-.307A5.939 5.939 0 019.81 1.437c.166.191.316.391.457.597z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shade2Icon;
/* prettier-ignore-end */
