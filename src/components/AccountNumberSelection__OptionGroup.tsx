import * as React from "react";
import {
  PlasmicAccountNumberSelection__OptionGroup,
  DefaultAccountNumberSelection__OptionGroupProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__OptionGroup";

export interface AccountNumberSelection__OptionGroupProps
  extends DefaultAccountNumberSelection__OptionGroupProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNumberSelection__OptionGroup(
  props: AccountNumberSelection__OptionGroupProps
) {
  const { plasmicProps } =
    PlasmicAccountNumberSelection__OptionGroup.useBehavior(props);
  return <PlasmicAccountNumberSelection__OptionGroup {...plasmicProps} />;
}

export default Object.assign(
  AccountNumberSelection__OptionGroup,

  {
    __plumeType: "select-option-group"
  }
);
