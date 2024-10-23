import * as React from "react";
import {
  PlasmicAccountNameSelection__Option,
  DefaultAccountNameSelection__OptionProps
} from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__Option";

import { SelectOptionRef } from "@plasmicapp/react-web";

export interface AccountNameSelection__OptionProps
  extends DefaultAccountNameSelection__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function AccountNameSelection__Option_(
  props: AccountNameSelection__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicAccountNameSelection__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection__Option {...plasmicProps} />;
}

const AccountNameSelection__Option = React.forwardRef(
  AccountNameSelection__Option_
);

export default Object.assign(
  AccountNameSelection__Option,

  {
    __plumeType: "select-option"
  }
);
