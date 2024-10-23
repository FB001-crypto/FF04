import * as React from "react";
import {
  PlasmicAccountNameSelection,
  DefaultAccountNameSelectionProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection";

import { SelectRef } from "@plasmicapp/react-web";
import AccountNameSelection__Option from "./AccountNameSelection__Option";
import AccountNameSelection__OptionGroup from "./AccountNameSelection__OptionGroup";

export interface AccountNameSelectionProps
  extends DefaultAccountNameSelectionProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNameSelection_(
  props: AccountNameSelectionProps,
  ref: SelectRef
) {
  const { plasmicProps, state } = PlasmicAccountNameSelection.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection {...plasmicProps} />;
}

const AccountNameSelection = React.forwardRef(AccountNameSelection_);

export default Object.assign(
  AccountNameSelection,

  {
    Option: AccountNameSelection__Option,
    OptionGroup: AccountNameSelection__OptionGroup,
    __plumeType: "select"
  }
);
