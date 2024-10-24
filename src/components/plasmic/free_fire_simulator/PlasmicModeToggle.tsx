// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: aGLypm5xeuJ7

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicModeToggle.module.css"; // plasmic-import: aGLypm5xeuJ7/css

createPlasmicElementProxy;

export type PlasmicModeToggle__VariantMembers = {};
export type PlasmicModeToggle__VariantsArgs = {};
type VariantPropType = keyof PlasmicModeToggle__VariantsArgs;
export const PlasmicModeToggle__VariantProps = new Array<VariantPropType>();

export type PlasmicModeToggle__ArgsType = {};
type ArgPropType = keyof PlasmicModeToggle__ArgsType;
export const PlasmicModeToggle__ArgProps = new Array<ArgPropType>();

export type PlasmicModeToggle__OverridesType = {
  modeSelect?: Flex__<"div">;
  快速模式?: Flex__<"div">;
  text?: Flex__<"div">;
  group43917?: Flex__<"div">;
  toggleButton?: Flex__<"div">;
  frame?: Flex__<"div">;
  frame2?: Flex__<"div">;
};

export interface DefaultModeToggleProps {
  className?: string;
}

const $$ = {};

function PlasmicModeToggle__RenderFunc(props: {
  variants: PlasmicModeToggle__VariantsArgs;
  args: PlasmicModeToggle__ArgsType;
  overrides: PlasmicModeToggle__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const [isModeSelectActive, triggerModeSelectActiveProps] = useTrigger(
    "usePressed",
    {}
  );
  const [isModeSelectFocusWithin, triggerModeSelectFocusWithinProps] =
    useTrigger("useFocusedWithin", {});
  const triggers = {
    activeFocusWithin_modeSelect: isModeSelectActive && isModeSelectFocusWithin
  };

  return (
    <div
      data-plasmic-name={"modeSelect"}
      data-plasmic-override={overrides.modeSelect}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.modeSelect
      )}
      data-plasmic-trigger-props={[
        triggerModeSelectActiveProps,
        triggerModeSelectFocusWithinProps
      ]}
    >
      <div
        data-plasmic-name={"\u5feb\u901f\u6a21\u5f0f"}
        data-plasmic-override={overrides.快速模式}
        className={classNames(projectcss.all, sty.快速模式)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <Trans__>
            {triggers.activeFocusWithin_modeSelect
              ? "\u8fde\u7eed\u6a21\u5f0f"
              : "\u5feb\u901f\u6a21\u5f0f"}
          </Trans__>
        </div>
      </div>
      <div
        data-plasmic-name={"group43917"}
        data-plasmic-override={overrides.group43917}
        className={classNames(projectcss.all, sty.group43917)}
      >
        <div
          data-plasmic-name={"toggleButton"}
          data-plasmic-override={overrides.toggleButton}
          className={classNames(projectcss.all, sty.toggleButton)}
        >
          {false ? (
            <div
              data-plasmic-name={"frame"}
              data-plasmic-override={overrides.frame}
              className={classNames(projectcss.all, sty.frame)}
            />
          ) : null}
          <div
            data-plasmic-name={"frame2"}
            data-plasmic-override={overrides.frame2}
            className={classNames(projectcss.all, sty.frame2)}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  modeSelect: [
    "modeSelect",
    "\u5feb\u901f\u6a21\u5f0f",
    "text",
    "group43917",
    "toggleButton",
    "frame",
    "frame2"
  ],
  快速模式: ["\u5feb\u901f\u6a21\u5f0f", "text"],
  text: ["text"],
  group43917: ["group43917", "toggleButton", "frame", "frame2"],
  toggleButton: ["toggleButton", "frame", "frame2"],
  frame: ["frame"],
  frame2: ["frame2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  modeSelect: "div";
  快速模式: "div";
  text: "div";
  group43917: "div";
  toggleButton: "div";
  frame: "div";
  frame2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModeToggle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModeToggle__VariantsArgs;
    args?: PlasmicModeToggle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModeToggle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicModeToggle__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicModeToggle__ArgProps,
          internalVariantPropNames: PlasmicModeToggle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicModeToggle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "modeSelect") {
    func.displayName = "PlasmicModeToggle";
  } else {
    func.displayName = `PlasmicModeToggle.${nodeName}`;
  }
  return func;
}

export const PlasmicModeToggle = Object.assign(
  // Top-level PlasmicModeToggle renders the root element
  makeNodeComponent("modeSelect"),
  {
    // Helper components rendering sub-elements
    快速模式: makeNodeComponent("\u5feb\u901f\u6a21\u5f0f"),
    text: makeNodeComponent("text"),
    group43917: makeNodeComponent("group43917"),
    toggleButton: makeNodeComponent("toggleButton"),
    frame: makeNodeComponent("frame"),
    frame2: makeNodeComponent("frame2"),

    // Metadata about props expected for PlasmicModeToggle
    internalVariantProps: PlasmicModeToggle__VariantProps,
    internalArgProps: PlasmicModeToggle__ArgProps
  }
);

export default PlasmicModeToggle;
/* prettier-ignore-end */
