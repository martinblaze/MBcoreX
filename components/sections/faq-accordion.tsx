import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type FAQItem = { question: string; answer: string }

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border-none">
          <AccordionTrigger className="py-4 text-body-md">{item.question}</AccordionTrigger>
          <AccordionContent className="pb-4 text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
