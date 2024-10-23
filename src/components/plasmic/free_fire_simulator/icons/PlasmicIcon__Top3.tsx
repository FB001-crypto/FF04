// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Top3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Top3Icon(props: Top3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.067 4.47h-.726v1.968H0V.874h2.19c.66 0 1.175.147 1.547.44.372.292.558.706.558 1.24 0 .387-.078.708-.235.962-.157.254-.402.46-.736.618l1.162 2.247v.057H3.049l-.982-1.967zm-.726-1.032h.849c.254 0 .446-.066.575-.2.128-.135.193-.322.193-.562 0-.24-.065-.429-.195-.565-.13-.137-.321-.205-.573-.205h-.85v1.532zm6.248 1.525c0-.201-.05-.359-.15-.474-.099-.114-.273-.222-.523-.324-.25-.102-.48-.205-.691-.31a2.393 2.393 0 01-.547-.363 1.427 1.427 0 01-.351-.477 1.587 1.587 0 01-.123-.658c0-.43.146-.785.436-1.064.29-.279.678-.44 1.162-.487V0h.607v.822c.466.068.833.26 1.099.575.266.314.4.714.4 1.197H7.615c0-.265-.051-.468-.153-.61a.504.504 0 00-.436-.215.494.494 0 00-.391.159c-.093.105-.14.251-.14.437s.054.338.16.45c.108.11.28.216.517.316s.46.205.67.314c.21.108.392.23.545.368.153.138.272.299.359.482.086.183.13.404.13.66 0 .437-.138.792-.415 1.067-.276.275-.653.436-1.129.482v.768h-.607V6.5c-.556-.059-.982-.25-1.279-.571-.296-.322-.445-.747-.445-1.275H6.29c0 .29.064.512.193.663.129.152.312.228.549.228a.54.54 0 00.408-.155c.1-.103.15-.245.15-.426h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Top3Icon;
/* prettier-ignore-end */
