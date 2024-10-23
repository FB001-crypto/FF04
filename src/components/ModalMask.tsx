// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicModalMask,
  DefaultModalMaskProps
} from "./plasmic/free_fire_simulator/PlasmicModalMask";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ModalMaskProps extends Omit<DefaultModalMaskProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultModalMaskProps altogether and have
// total control over the props for your component.
export interface ModalMaskProps extends DefaultModalMaskProps {}

function ModalMask_(props: ModalMaskProps, ref: HTMLElementRefOf<"section">) {
  // Use PlasmicModalMask to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicModalMask are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ModalMaskProps here, but feel free
  // to do whatever works for you.

  return <PlasmicModalMask modalMask={{ ref }} {...props} />;
}

const ModalMask = React.forwardRef(ModalMask_);
export default ModalMask;