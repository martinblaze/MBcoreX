import { forwardRef } from "react"
import { Mail, Phone, Search } from "lucide-react"

import { TextField, type TextFieldProps } from "./text-field"

export const EmailField = forwardRef<HTMLInputElement, Omit<TextFieldProps, "type" | "icon">>(
  function EmailField(props, ref) {
    return <TextField ref={ref} type="email" icon={<Mail />} autoComplete="email" {...props} />
  }
)

export const PhoneField = forwardRef<HTMLInputElement, Omit<TextFieldProps, "type" | "icon">>(
  function PhoneField(props, ref) {
    return <TextField ref={ref} type="tel" icon={<Phone />} autoComplete="tel" {...props} />
  }
)

export const SearchField = forwardRef<HTMLInputElement, Omit<TextFieldProps, "type" | "icon">>(
  function SearchField(props, ref) {
    return (
      <TextField
        ref={ref}
        type="search"
        icon={<Search />}
        placeholder="Search…"
        aria-label="Search"
        {...props}
      />
    )
  }
)
