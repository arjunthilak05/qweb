import React from "react"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => (
    <textarea
      ref={ref}
      className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200"
      {...props}
    />
  )
)
Textarea.displayName = "Textarea" 