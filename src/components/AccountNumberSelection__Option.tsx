import * as React from "react";
import {
  PlasmicAccountNumberSelection__Option,
  DefaultAccountNumberSelection__OptionProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__Option";

import { SelectOptionRef } from "@plasmicapp/react-web";

export interface AccountNumberSelection__OptionProps
  extends DefaultAccountNumberSelection__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNumberSelection__Option_(
  props: AccountNumberSelection__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicAccountNumberSelection__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection__Option {...plasmicProps} />;
}

const AccountNumberSelection__Option = React.forwardRef(
  AccountNumberSelection__Option_
);

export default Object.assign(
  AccountNumberSelection__Option,

  {
    __plumeType: "select-option"
  }
);
