'use client'
import { H2 } from '@/components/ui/H2'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { setItemFromLocalStorage } from '@/lib/utils'
import { DataTable, columns, data as rowsData } from './components'
import { CaptionIndicator } from './components/CaptionIndicator'
import { useSpeedBreakPoint } from './hooks'

export default function SpeedBreakpointPage() {
  const { form, charSpeed } = useSpeedBreakPoint()

  const caption = [
    {
      id: 1,
      skin: 'primary',
      label: 'Reached without modifiers',
    },
    {
      id: 2,
      skin: 'secondary',
      label: 'Reached with modifiers',
    },
    {
      id: 3,
      skin: 'warning',
      label: 'Not reached at all		',
    },
  ] as const

  return (
    <section className="container mx-auto flex flex-col gap-8 p-4">
      <H2>Speed breakpoints</H2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 align-middle">
          <Card>
            <CardHeader>
              <CardTitle>Character Info</CardTitle>
              <CardDescription>
                Enter your character information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form>
                  <div className="flex flex-wrap gap-4">
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem className="flex-grow basis-11">
                          <FormLabel className="block">Level</FormLabel>
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
                        <FormItem className="flex-grow">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Character status</CardTitle>
              <CardDescription>
                This is your detailed character speed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8">base</TableHead>
                    <TableHead className="w-8">modifiers</TableHead>
                    <TableHead className="w-8">total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>{charSpeed.base}</TableCell>
                    <TableCell>{charSpeed.modifiers}</TableCell>
                    <TableCell>{charSpeed.totalWithModifiers}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <DataTable columns={columns} data={rowsData} speed={charSpeed}>
          <DataTable.Caption className="mt-0 bg-zinc-100 py-4">
            <div className="flex items-center justify-center gap-8">
              {caption.map(({ id, label, skin }) => (
                <span key={id} className="flex items-center gap-2">
                  <CaptionIndicator skin={skin} />
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </DataTable.Caption>
        </DataTable>
      </div>
    </section>
  )
}
