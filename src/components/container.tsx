import { type ComponentPropsWithoutRef } from "react";

/**
 * Standard container caps at 1240px for text-led and utility sections, so
 * paragraph measure and grid rhythm stay controlled at every width.
 *
 * `wide` is for photography-led editorial sections (Programs, Instructor,
 * Merchandise, Our Belief) that should use more of the viewport on large
 * screens instead of floating in a fixed centered column.
 */
export function Container({
  children,
  className = "",
  wide = false,
  ...props
}: ComponentPropsWithoutRef<"div"> & { wide?: boolean }) {
  const maxWidth = wide
    ? "max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1680px]"
    : "max-w-[1240px]";

  return (
    <div
      className={`mx-auto w-full ${maxWidth} px-5 sm:px-8 lg:px-10 2xl:px-16 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
