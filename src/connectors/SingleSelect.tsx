import { useController, useFormContext } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Label } from "../components/ui/label"

export interface OptionSelect {
  value: string
  label: string
}

export const SingleSelect = ({
  name,
  placeholder,
  label,
  options,
}: {
  name: string
  placeholder?: string
  label?: string
  options: OptionSelect[]
}) => {
  const { setValue, control } = useFormContext()
  const {
    field: { value },
  } = useController({ name, control })

  return (
    <div className="flex flex-col gap-2 w-full">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Select
        onValueChange={(value) => setValue(name, value)}
        name={name}
        defaultValue={value}
        value={value}
      >
        <SelectTrigger className="border-primary outline-primary">
          <SelectValue placeholder={placeholder ?? "Selecione..."} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
