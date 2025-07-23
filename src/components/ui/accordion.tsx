import React, { createContext, useContext, useState, ReactNode } from "react"

const AccordionContext = createContext<unknown>(null)

export const Accordion = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div className="space-y-4">{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({ value, children, className }: { value: string; children: ReactNode; className?: string }) => {
  const { open } = useContext(AccordionContext)
  return (
    <div className={`rounded-xl border border-cyan-700/30 bg-gray-900/60 shadow-md transition-all duration-300 ${className || ""}`.replace(/  +/g, ' ')} data-open={open === value}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { accordionValue: value })
          : child
      )}
    </div>
  )
}

export const AccordionTrigger = ({ children, accordionValue, className }: { children: ReactNode; accordionValue?: string; className?: string }) => {
  const { open, setOpen } = useContext(AccordionContext)
  const isOpen = open === accordionValue
  return (
    <button
      className={`w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-left text-white hover:text-cyan-400 transition-colors duration-300 ${className || ""}`.replace(/  +/g, ' ')}
      onClick={() => setOpen(isOpen ? null : accordionValue)}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <span className={`ml-4 transition-transform duration-300 ${isOpen ? "rotate-90 text-cyan-400" : "rotate-0 text-gray-400"}`}>
        ▼
      </span>
    </button>
  )
}

export const AccordionContent = ({ children, accordionValue, className }: { children: ReactNode; accordionValue?: string; className?: string }) => {
  const { open } = useContext(AccordionContext)
  const isOpen = open === accordionValue
  return (
    <div
      className={`px-8 pb-6 overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
      } ${className || ''}`.replace(/  +/g, ' ')}
      aria-hidden={!isOpen}
      style={{ willChange: 'max-height, opacity, padding' }}
    >
      {children}
    </div>
  )
} 