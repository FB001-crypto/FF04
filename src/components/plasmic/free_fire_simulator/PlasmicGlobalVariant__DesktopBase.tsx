// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type DesktopBaseValue = "desktopOnly";
export const DesktopBaseContext = React.createContext<
  DesktopBaseValue[] | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export const useScreenVariants = createUseScreenVariants(true, {
  desktopOnly: "(min-width:600px)",
});

export default DesktopBaseContext;
/* prettier-ignore-end */
