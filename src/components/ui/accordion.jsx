import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, type = "single", collapsible = true }) => {
  const [openItems, setOpenItems] = React.useState([])

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value])
    }
  }

  return (
    <div className="w-full">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { openItems, toggleItem })
      )}
    </div>
  )
}

const AccordionItem = ({ value, children, openItems, toggleItem }) => {
  const isOpen = openItems?.includes(value)
  
  return (
    <div className="border-b">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, value, toggleItem })
      )}
    </div>
  )
}

const AccordionTrigger = React.forwardRef(
  ({ className, children, isOpen, value, toggleItem, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left",
        className
      )}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(
  ({ className, children, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "pb-4" : "h-0"
      )}
      {...props}
    >
      {isOpen && <div className="text-gray-600">{children}</div>}
    </div>
  )
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
