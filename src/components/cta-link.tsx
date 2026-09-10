import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "inverse" | "secondary" | "secondaryInverse" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-deep-ocean text-paper border border-deep-ocean hover:bg-ocean-blue hover:border-ocean-blue",
  inverse:
    "bg-white text-deep-ocean border border-white hover:bg-soft-aqua hover:border-soft-aqua",
  secondary:
    "bg-transparent text-deep-ocean border border-ink/30 hover:border-deep-ocean",
  secondaryInverse:
    "bg-transparent text-white border border-white/70 hover:border-white",
  ghost: "text-deep-ocean underline underline-offset-4 decoration-1 hover:text-ocean-blue",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href: ComponentProps<typeof Link>["href"];
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  if (variant === "ghost") {
    return (
      <Link href={href} className={`${variantClasses.ghost} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
