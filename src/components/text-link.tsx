import Link from "next/link";
import type { ComponentProps } from "react";

/** An inline link inside body copy, matching the site's underlined text links. */
export function TextLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`font-medium text-deep-ocean underline decoration-1 underline-offset-4 hover:text-ocean-blue ${className}`}
      {...props}
    />
  );
}
