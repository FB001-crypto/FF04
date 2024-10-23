import * as React from "react";
import {
  PlasmicChannelOptions__Option,
  DefaultChannelOptions__OptionProps
} from "./plasmic/free_fire_simulator/PlasmicChannelOptions__Option";

import { SelectOptionRef } from "@plasmicapp/react-web";

export interface ChannelOptions__OptionProps
  extends DefaultChannelOptions__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function ChannelOptions__Option_(
  props: ChannelOptions__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicChannelOptions__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicChannelOptions__Option {...plasmicProps} />;
}

const ChannelOptions__Option = React.forwardRef(ChannelOptions__Option_);

export default Object.assign(
  ChannelOptions__Option,

  {
    __plumeType: "select-option"
  }
);
