// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: h_M3E9U_Kj7w

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

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicAccountNameSelection__Option.module.css"; // plasmic-import: h_M3E9U_Kj7w/css

import SUPER__PlasmicAccountNameSelection from "./PlasmicAccountNameSelection"; // plasmic-import: zxbY7F-iXxmn/render

createPlasmicElementProxy;

export type PlasmicAccountNameSelection__Option__VariantMembers = {
  isSelected: "isSelected";
  isHighlighted: "isHighlighted";
  isDisabled: "isDisabled";
};
export type PlasmicAccountNameSelection__Option__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};
type VariantPropType = keyof PlasmicAccountNameSelection__Option__VariantsArgs;
export const PlasmicAccountNameSelection__Option__VariantProps =
  new Array<VariantPropType>("isSelected", "isHighlighted", "isDisabled");

export type PlasmicAccountNameSelection__Option__ArgsType = {
  children?: React.ReactNode;
  value?: string;
  textValue?: string;
};
type ArgPropType = keyof PlasmicAccountNameSelection__Option__ArgsType;
export const PlasmicAccountNameSelection__Option__ArgProps =
  new Array<ArgPropType>("children", "value", "textValue");

export type PlasmicAccountNameSelection__Option__OverridesType = {
  root?: Flex__<"div">;
  labelContainer?: Flex__<"div">;
};

export interface DefaultAccountNameSelection__OptionProps
  extends pp.BaseSelectOptionProps {}

const $$ = {};

function PlasmicAccountNameSelection__Option__RenderFunc(props: {
  variants: PlasmicAccountNameSelection__Option__VariantsArgs;
  args: PlasmicAccountNameSelection__Option__ArgsType;
  overrides: PlasmicAccountNameSelection__Option__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isSelected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSelected
      },
      {
        path: "isHighlighted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isHighlighted
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const superContexts = {
    AccountNameSelection: React.useContext(
      SUPER__PlasmicAccountNameSelection.Context
    )
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisHighlighted]: hasVariant(
            $state,
            "isHighlighted",
            "isHighlighted"
          ),
          [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected")
        }
      )}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer, {
          [sty.labelContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"Option"}</Trans__>,
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildrenisHighlighted]: hasVariant(
              $state,
              "isHighlighted",
              "isHighlighted"
            ),
            [sty.slotTargetChildrenisSelected]: hasVariant(
              $state,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionProps>(
  props: P,
  ref: pp.SelectOptionRef
) {
  return pp.useSelectOption(
    PlasmicAccountNameSelection__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },
      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccountNameSelection__Option__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccountNameSelection__Option__VariantsArgs;
    args?: PlasmicAccountNameSelection__Option__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicAccountNameSelection__Option__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicAccountNameSelection__Option__ArgsType,
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
          internalArgPropNames: PlasmicAccountNameSelection__Option__ArgProps,
          internalVariantPropNames:
            PlasmicAccountNameSelection__Option__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAccountNameSelection__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccountNameSelection__Option";
  } else {
    func.displayName = `PlasmicAccountNameSelection__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicAccountNameSelection__Option = Object.assign(
  // Top-level PlasmicAccountNameSelection__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicAccountNameSelection__Option
    internalVariantProps: PlasmicAccountNameSelection__Option__VariantProps,
    internalArgProps: PlasmicAccountNameSelection__Option__ArgProps,

    useBehavior
  }
);

export default PlasmicAccountNameSelection__Option;
/* prettier-ignore-end */