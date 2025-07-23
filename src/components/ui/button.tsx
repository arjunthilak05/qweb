import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", fullWidth, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center px-10 py-4 rounded-full font-extrabold text-xl shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 tracking-wide select-none text-shadow-lg"
    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 text-white hover:from-cyan-500 hover:to-purple-600 hover:scale-105 active:scale-95 hover:brightness-110",
      outline:
        "border-2 border-cyan-400 text-cyan-200 bg-transparent hover:bg-cyan-500/10 hover:text-white hover:scale-105 active:scale-95",
    }
    return (
      <button
        ref={ref}
        className={`$ {base} $ {variants[variant]} $ {fullWidth ? "w-full" : ""} $ {className}`.replace(/  +/g, ' ')}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button" 