import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

// Add showStar prop
interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  showStar?: boolean;
}

function AccordionTrigger({
  className,
  children,
  showStar, // Destructure showStar
  ...props
}: AccordionTriggerProps) { // Use updated props type
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Add gap-4 here for spacing between content span and chevron
          "focus-visible:border-ring focus-visible:ring-ring/50 flex items-center justify-between w-full gap-3 rounded-md py-2 pr-4 text-left text-large transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer", // Changed items-start back to items-center
          className
        )}
        {...props}
      >
        <ChevronDownIcon className="cursor-pointer size-5 shrink-0 transition-transform duration-200" />
        {/* Add conditional class here, remove gap-4 */}
        <span className={cn(
          "flex flex-1 items-center", // Changed items-start back to items-center
          showStar && "accordion-content-with-star" // Add conditional class
        )}>
          {children}
        </span>

      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-contentadad"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("py-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
