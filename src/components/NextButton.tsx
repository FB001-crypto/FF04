import * as React from "react";
import {
  PlasmicNextButton,
  DefaultNextButtonProps
} from "./plasmic/free_fire_simulator/PlasmicNextButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface NextButtonProps extends DefaultNextButtonProps {
  // Feel free to add any additional props that this component should receive
}
function NextButton_(props: NextButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicNextButton.useBehavior<NextButtonProps>(
    props,
    ref
  );
  return <PlasmicNextButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<NextButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<NextButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const NextButton = React.forwardRef(NextButton_) as any as ButtonComponentType;

export default Object.assign(NextButton, { __plumeType: "button" });
