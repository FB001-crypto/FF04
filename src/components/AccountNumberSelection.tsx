import * as React from "react";
import {
  PlasmicAccountNumberSelection,
  DefaultAccountNumberSelectionProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection";

import { SelectRef } from "@plasmicapp/react-web";
import AccountNumberSelection__Option from "./AccountNumberSelection__Option";
import AccountNumberSelection__OptionGroup from "./AccountNumberSelection__OptionGroup";

export interface AccountNumberSelectionProps
  extends DefaultAccountNumberSelectionProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNumberSelection_(
  props: AccountNumberSelectionProps,
  ref: SelectRef
) {
  const { plasmicProps, state } = PlasmicAccountNumberSelection.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection {...plasmicProps} />;
}

const AccountNumberSelection = React.forwardRef(AccountNumberSelection_);

export default Object.assign(
  AccountNumberSelection,

  {
    Option: AccountNumberSelection__Option,
    OptionGroup: AccountNumberSelection__OptionGroup,
    __plumeType: "select"
  }
);
