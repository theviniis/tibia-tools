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
import { setItemFromLocalStorage } from '@/lib/utils'
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
            <form className="basis-1/4">
              <div className="flex gap-3">
                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block">Character level</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Enter your character's level"
                          onChange={(e) => {
                            field.onChange(e.target.value)
                            setItemFromLocalStorage('level', e.target.value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="spell"
                  render={({ field }) => (
                    <FormItem className="basis-2/3">
                      <FormLabel className="block">Haste spell</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value)
                          setItemFromLocalStorage('spell', value)
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a haste spell" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">none</SelectItem>
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
            <h2 className="mb-2 text-sm font-medium leading-none">
              Character status
            </h2>
            <ul className="text-sm">
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
