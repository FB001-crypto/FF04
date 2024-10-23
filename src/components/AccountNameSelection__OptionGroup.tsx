import * as React from "react";
import {
  PlasmicAccountNameSelection__OptionGroup,
  DefaultAccountNameSelection__OptionGroupProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__OptionGroup";

export interface AccountNameSelection__OptionGroupProps
  extends DefaultAccountNameSelection__OptionGroupProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNameSelection__OptionGroup(
  props: AccountNameSelection__OptionGroupProps
) {
  const { plasmicProps } =
    PlasmicAccountNameSelection__OptionGroup.useBehavior(props);
  return <PlasmicAccountNameSelection__OptionGroup {...plasmicProps} />;
}

export default Object.assign(
  AccountNameSelection__OptionGroup,

  {
    __plumeType: "select-option-group"
  }
);
