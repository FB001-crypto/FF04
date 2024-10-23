import * as React from "react";
import {
  PlasmicAccountNameSelection__Overlay,
  DefaultAccountNameSelection__OverlayProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__Overlay";

import { TriggeredOverlayRef } from "@plasmicapp/react-web";

export interface AccountNameSelection__OverlayProps
  extends DefaultAccountNameSelection__OverlayProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNameSelection__Overlay_(
  props: AccountNameSelection__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicAccountNameSelection__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection__Overlay {...plasmicProps} />;
}

const AccountNameSelection__Overlay = React.forwardRef(
  AccountNameSelection__Overlay_
);

export default Object.assign(AccountNameSelection__Overlay, {
  __plumeType: "triggered-overlay"
});
