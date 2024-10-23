import * as React from "react";
import {
  PlasmicChannelOptions,
  DefaultChannelOptionsProps
} from "./plasmic/free_fire_simulator/PlasmicChannelOptions";

import { SelectRef } from "@plasmicapp/react-web";
import ChannelOptions__Option from "./ChannelOptions__Option";
import ChannelOptions__OptionGroup from "./ChannelOptions__OptionGroup";

export interface ChannelOptionsProps extends DefaultChannelOptionsProps {
  // Feel free to add any additional props that this component should receive
}
function ChannelOptions_(props: ChannelOptionsProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicChannelOptions.useBehavior(props, ref);
  return <PlasmicChannelOptions {...plasmicProps} />;
}

const ChannelOptions = React.forwardRef(ChannelOptions_);

export default Object.assign(
  ChannelOptions,

  {
    Option: ChannelOptions__Option,
    OptionGroup: ChannelOptions__OptionGroup,
    __plumeType: "select"
  }
);
