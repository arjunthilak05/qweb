import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", fullWidth, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center px-10 py-4 rounded-full font-extrabold text-xl shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 tracking-wide select-none text-shadow-lg ${className} ${fullWidth ? "w-full" : ""}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button" 