import { AlertTriangle, CheckCircle2, Inbox, type LucideIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

type StateProps = {
  title: string
  description?: string
  action?: { label: string; onClick: () => void }
  icon?: LucideIcon
}

/** No-results state — empty portfolio filter, empty blog category, empty search. */
export function EmptyState({ title, description, action, icon: Icon = Inbox }: StateProps) {
  return (
    <Empty className="border border-dashed border-border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Icon aria-hidden="true" />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {action && (
        <EmptyContent>
          <Button variant="outline" onClick={action.onClick}>
            {action.label}
          </Button>
        </EmptyContent>
      )}
    </Empty>
  )
}

/** Inline failure state — failed form submission, failed data fetch. */
export function ErrorState({ title, description, action, icon: Icon = AlertTriangle }: StateProps) {
  return (
    <Alert variant="destructive">
      <Icon aria-hidden="true" />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
      {action && (
        <Button variant="outline" size="sm" onClick={action.onClick} className="mt-2">
          {action.label}
        </Button>
      )}
    </Alert>
  )
}

/** Inline success confirmation — used by ContactForm; exported separately for ad-hoc use elsewhere. */
export function SuccessMessage({ title, description, icon: Icon = CheckCircle2 }: Omit<StateProps, "action">) {
  return (
    <Alert>
      <Icon className="text-success" aria-hidden="true" />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  )
}
