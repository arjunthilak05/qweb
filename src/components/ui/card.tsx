import React from "react"

export const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl shadow-lg p-6 backdrop-blur-md $ {className}`.replace(/  +/g, ' ')} {...props}>
    {children}
  </div>
)
export const CardContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-2 $ {className}`.replace(/  +/g, ' ')} {...props}>{children}</div>
)
export const CardDescription = ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-gray-300 text-base $ {className}`.replace(/  +/g, ' ')} {...props}>{children}</p>
)
export const CardHeader = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 $ {className}`.replace(/  +/g, ' ')} {...props}>{children}</div>
)
export const CardTitle = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-xl font-bold text-white $ {className}`.replace(/  +/g, ' ')} {...props}>{children}</h3>
) 