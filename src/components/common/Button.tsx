import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "legal" | "credit";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles =
    "inline-block font-bold tracking-widest uppercase transition-all duration-200 clip-btn disabled:opacity-50 disabled:cursor-not-allowed text-center";

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-10 py-5 text-sm",
  };

  const variants = {
    primary:
      "bg-brand-gold-light bg-gradient-to-br from-brand-gold to-brand-gold-light text-brand-burgundy shadow-lg hover:from-brand-gold-light hover:to-white hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-brand-burgundy text-brand-gold-light hover:bg-brand-burgundy-light",
    outline:
      "bg-transparent border border-brand-gold/50 text-brand-burgundy hover:border-brand-gold hover:text-brand-gold-text",
    legal:
      "bg-gradient-to-br from-burg4 to-burg5 text-brand-gold-light hover:from-burg5 hover:to-[#A0142A]",
    credit:
      "bg-gradient-to-br from-brand-navy to-[#1A5A9A] text-brand-gold-light hover:from-[#1A5A9A] hover:to-[#2A6AAA]",
  };

  const combinedClasses = `
    ${baseStyles} 
    ${sizes[size]} 
    ${variants[variant]} 
    ${fullWidth ? "w-full" : ""} 
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};
