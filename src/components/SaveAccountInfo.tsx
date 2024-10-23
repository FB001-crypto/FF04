import * as React from "react";
import {
  PlasmicSaveAccountInfo,
  DefaultSaveAccountInfoProps
} from "./plasmic/free_fire_simulator/PlasmicSaveAccountInfo";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SaveAccountInfoProps extends DefaultSaveAccountInfoProps {
  // Feel free to add any additional props that this component should receive
}
function SaveAccountInfo_(props: SaveAccountInfoProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicSaveAccountInfo.useBehavior<SaveAccountInfoProps>(props, ref);
  return <PlasmicSaveAccountInfo {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SaveAccountInfoProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SaveAccountInfoProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const SaveAccountInfo = React.forwardRef(
  SaveAccountInfo_
) as any as ButtonComponentType;

export default Object.assign(SaveAccountInfo, { __plumeType: "button" });
