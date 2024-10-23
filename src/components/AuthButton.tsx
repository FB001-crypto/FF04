import * as React from "react";
import {
  PlasmicAuthButton,
  DefaultAuthButtonProps
} from "./plasmic/free_fire_simulator/PlasmicAuthButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface AuthButtonProps extends DefaultAuthButtonProps {
  // Feel free to add any additional props that this component should receive
}
function AuthButton_(props: AuthButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicAuthButton.useBehavior<AuthButtonProps>(
    props,
    ref
  );
  return <PlasmicAuthButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<AuthButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<AuthButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const AuthButton = React.forwardRef(AuthButton_) as any as ButtonComponentType;

export default Object.assign(AuthButton, { __plumeType: "button" });
