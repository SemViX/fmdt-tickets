import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface IButtonProps {
  text?: string;
  LeftIcon?: LucideIcon;
  RightIcon?: LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({
  text,
  LeftIcon,
  RightIcon,
  onClick,
  variant = "primary",
  disabled = false,
}: IButtonProps) => {
  const buttonStyle = {
    primary:
      "border-transparent bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-[var(--color-text)] shadow-[0_0_24px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,var(--color-primary-hover),var(--color-secondary-hover))] hover:shadow-[0_0_32px_var(--color-secondary-glow)]",
    secondary:
      "border-[var(--color-border-accent)] bg-[var(--color-surface-glass)] text-[var(--color-text)] shadow-[inset_0_1px_0_var(--color-glass-highlight)] hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:bg-[var(--color-surface-glass-hover)] hover:shadow-[0_0_24px_var(--color-primary-glow)]",
  }[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-extrabold tracking-wide transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)] active:translate-y-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45",
        buttonStyle,
      )}
    >
      {LeftIcon && <LeftIcon className="size-[18px] shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />}
      {text && <span>{text}</span>}
      {RightIcon && <RightIcon className="size-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </button>
  );
};

export default Button;
