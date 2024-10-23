import * as React from "react";
import {
  PlasmicChannelOptions__OptionGroup,
  DefaultChannelOptions__OptionGroupProps
} from "./plasmic/free_fire_simulator/PlasmicChannelOptions__OptionGroup";

export interface ChannelOptions__OptionGroupProps
  extends DefaultChannelOptions__OptionGroupProps {
  // Feel free to add any additional props that this component should receive
}
function ChannelOptions__OptionGroup(props: ChannelOptions__OptionGroupProps) {
  const { plasmicProps } =
    PlasmicChannelOptions__OptionGroup.useBehavior(props);
  return <PlasmicChannelOptions__OptionGroup {...plasmicProps} />;
}

export default Object.assign(
  ChannelOptions__OptionGroup,

  {
    __plumeType: "select-option-group"
  }
);
