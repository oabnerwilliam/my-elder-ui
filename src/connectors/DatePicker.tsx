import { useController, useFormContext } from "react-hook-form"
import { Calendar as CalendarIcon } from "lucide-react"
import { Label } from "../components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import { format } from "date-fns"

export const DatePicker = ({
  name,
  placeholder = "Selecione uma data:",
  label,
}: {
  name: string
  placeholder?: string
  label?: string
}) => {
  const { setValue, control } = useFormContext()
  const {
    field: { value },
  } = useController({ name, control })

  return (
    <div className="flex flex-col gap-2 w-full justify-start items-start">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Popover>
        <PopoverTrigger>
          <Button variant="outline" type="button">
            <CalendarIcon className="text-primary" />
            {value ? format(value, "dd/MM/yyyy") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            className="w-full"
            onSelect={(value) => setValue(name, value)}
            selected={value}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
