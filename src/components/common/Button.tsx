import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-background border-transparent",
  secondary: "bg-secondary text-background border-transparent",
  ghost: "btn-ghost",
};

export const Button = ({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn-base inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
