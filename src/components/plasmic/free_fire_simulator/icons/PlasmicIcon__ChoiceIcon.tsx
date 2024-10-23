// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChoiceIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChoiceIconIcon(props: ChoiceIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M17.349 32.767a7.606 7.606 0 003.2 6.607 3.44 3.44 0 01-.454.032H5.783a3.184 3.184 0 01-3.184-3.184v-3.455h14.75zM37.4 30.913v4.39a4.102 4.102 0 01-4.102 4.102h-.026a4.103 4.103 0 01-4.103-4.102v-4.39H37.4zm-18.292.092l8.675 4.13v.168a5.46 5.46 0 00.826 2.897 6.197 6.197 0 01-3.66 1.19 6.23 6.23 0 01-5.84-8.385zm.624-1.238a6.223 6.223 0 018.05-2.149v5.98l-8.05-3.831zM2.6 31.38V17.7h20.68v8.034a7.63 7.63 0 00-5.73 5.646H2.599zm8.086-9.094v-1.561a1.82 1.82 0 011.82-1.819h.868a1.82 1.82 0 011.82 1.819v1.561h1.56a1.816 1.816 0 011.819 1.82v.868a1.82 1.82 0 01-1.819 1.819h-1.56v1.56a1.816 1.816 0 01-1.82 1.82h-.868a1.818 1.818 0 01-1.82-1.82v-1.56h-1.56a1.82 1.82 0 01-1.82-1.819v-.869a1.82 1.82 0 011.82-1.819h1.56zm18.485 7.24v-4.39a4.103 4.103 0 014.102-4.102h.027a4.102 4.102 0 014.102 4.102v4.39H29.17zm-15.364-5.854h2.947a.432.432 0 01.433.433v.869a.433.433 0 01-.433.432h-2.947v2.948a.431.431 0 01-.432.432h-.87a.433.433 0 01-.432-.432v-2.948H9.124a.433.433 0 01-.432-.432v-.869a.433.433 0 01.432-.433h2.948v-2.947a.433.433 0 01.433-.432h.868a.433.433 0 01.433.432v2.947zM2.599 16.315v-2.06c0-.62.182-1.228.523-1.747l2.017-3.072h15.6l2.017 3.072c.341.519.523 1.127.523 1.748v2.058H2.599zM5.446 8.05a1.76 1.76 0 01-.002-.08V3.435a2.839 2.839 0 012.84-2.84h9.31a2.84 2.84 0 012.84 2.84v4.537c0 .026 0 .053-.002.079H5.446z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChoiceIconIcon;
/* prettier-ignore-end */
