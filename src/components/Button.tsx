"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
  variant?: "gradient" | "outline" | "shine";
  className?: string;
};

export default function Button({
  href,
  onClick,
  label,
  children,
  variant = "gradient",
  className = "",
}: ButtonProps) {
  const baseStyle =
    "relative inline-block px-6 py-3 rounded-lg font-medium text-base overflow-hidden transition-all duration-300 ease-out isolate group/button";

  const gradientVariant = `
    text-white shadow
  `;

  const outlineVariant = `
    text-[#2C5D47] border border-[#2C5D47]
    before:absolute before:inset-0 before:w-full before:h-full before:bg-[#2C5D47]
    before:scale-x-0 hover:before:scale-x-100 before:origin-left
    before:transition-transform before:duration-300 before:ease-out
    hover:text-white before:content-['']
  `;

  const shineVariant = `
    bg-[#2C5D47] text-white
    before:absolute before:inset-0 before:w-full before:h-full
    before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
    before:translate-x-[-100%] hover:before:translate-x-[100%]
    before:transition-transform before:duration-700 before:ease-out before:content-['']
  `;

  const content = <span className="relative z-10">{label || children}</span>;

  const ButtonInner = () => {
    if (variant === "gradient") {
      return (
        <>
          <span className="absolute inset-0 bg-[#2C5D47] transition-transform duration-300 ease-out group-hover/button:translate-x-full hover:translate-x-full"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 translate-x-[-100%] transition-transform duration-300 ease-out group-hover/button:translate-x-0 hover:translate-x-0"></span>
          {content}
        </>
      );
    }
    return content;
  };

  const commonClasses = `${baseStyle} ${
    variant === "gradient"
      ? gradientVariant
      : variant === "outline"
        ? outlineVariant
        : shineVariant
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        <ButtonInner />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      <ButtonInner />
    </button>
  );
}
