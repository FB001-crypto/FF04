import * as React from "react";
import {
  PlasmicAccountNumberSelection__Overlay,
  DefaultAccountNumberSelection__OverlayProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__Overlay";

import { TriggeredOverlayRef } from "@plasmicapp/react-web";

export interface AccountNumberSelection__OverlayProps
  extends DefaultAccountNumberSelection__OverlayProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNumberSelection__Overlay_(
  props: AccountNumberSelection__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicAccountNumberSelection__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection__Overlay {...plasmicProps} />;
}

const AccountNumberSelection__Overlay = React.forwardRef(
  AccountNumberSelection__Overlay_
);

export default Object.assign(AccountNumberSelection__Overlay, {
  __plumeType: "triggered-overlay"
});
