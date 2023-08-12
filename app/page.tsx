'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import { DataTable, columns, data as rowsData } from './components'
import { useSpeedBreakPoint } from './hooks'

export default function SpeedBreakpointPage() {
  const { form, charSpeed } = useSpeedBreakPoint()

  return (
    <section className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="leading-1 text-4xl font-medium">Speed breakpoints</h1>
      <Separator />
      <div className="flex flex-col gap-4">
        <div className="flex gap-8 align-middle">
          <Form {...form}>
            <form>
              <div className="gap-2">
                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Character level</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter your character's level"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
                <FormField
                  control={form.control}
                  name="spell"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Haste spell</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a haste spell" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectSeparator />
                          <SelectItem value="haste">utani hur</SelectItem>
                          <SelectItem value="strongHaste">
                            utani gran hur
                          </SelectItem>
                          <SelectItem value="charge">
                            utani tempo hur
                          </SelectItem>
                          <SelectItem value="swiftFoot">
                            utamo tempo san
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>

          <div className="basis-1/4">
            <h2 className="text-sm font-medium leading-none">
              Character status
            </h2>
            <ul className="mt-2 text-sm">
              <li className="flex justify-between align-middle leading-5">
                <span className="font-medium">Base speed:</span>
                {charSpeed.base}
              </li>
              <li className="flex justify-between align-middle leading-5">
                <span className="font-medium">Modifiers:</span>
                {charSpeed.modifiers}
              </li>
              <li className="flex justify-between align-middle leading-5">
                <span className="font-medium">With modifiers:</span>
                {charSpeed.totalWithModifiers}
              </li>
            </ul>
          </div>
        </div>

        <DataTable columns={columns} data={rowsData} speed={charSpeed} />
      </div>
    </section>
  )
}
