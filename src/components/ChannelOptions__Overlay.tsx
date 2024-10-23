import * as React from "react";
import {
  PlasmicChannelOptions__Overlay,
  DefaultChannelOptions__OverlayProps
} from "./plasmic/free_fire_simulator/PlasmicChannelOptions__Overlay";

import { TriggeredOverlayRef } from "@plasmicapp/react-web";

export interface ChannelOptions__OverlayProps
  extends DefaultChannelOptions__OverlayProps {
  // Feel free to add any additional props that this component should receive
}
function ChannelOptions__Overlay_(
  props: ChannelOptions__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicChannelOptions__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicChannelOptions__Overlay {...plasmicProps} />;
}

const ChannelOptions__Overlay = React.forwardRef(ChannelOptions__Overlay_);

export default Object.assign(ChannelOptions__Overlay, {
  __plumeType: "triggered-overlay"
});
