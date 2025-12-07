import { AccordionDemo } from '@/component/Accordion'
import { AlertDialogDemo } from '@/component/AlertDialog'
import { AvatarDemo } from '@/component/Avatar'
import { ButtonGroupDemo } from '@/component/ButtonGroup'
import { CardDemo } from '@/component/Card'
import { CarouselDApiDemo } from '@/component/CarouselAPI'
import { ChartDemo } from '@/component/Chart'
import { ComboboxDemo } from '@/component/Combobox'
// import { CommandDemo } from '@/component/Command'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import DemoPage from './payments/page'
import { DrawerDemo } from '@/component/Drawer'
import { DataTableDemo } from '@/component/DataTable'
import { CheckboxDemo } from '@/component/Checkbox'
import { FieldDemo } from '@/component/Field'

export default function Page() {
  return (
    <div>
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-4'>
        Shadcn-Ui Components:
      </h1>
      <ThemeProvider>
        <SidebarTrigger />
        <div className='max-w-7xl mx-auto'>
          <CardDemo />
          <AccordionDemo />
          <AlertDialogDemo />
          <AvatarDemo />
          <ButtonGroupDemo />
          <CarouselDApiDemo />
          <ChartDemo />
          <ComboboxDemo />
          {/* <CommandDemo /> */}
          <DemoPage />
          <DrawerDemo />
          <CheckboxDemo />
          <DataTableDemo />
          <FieldDemo />
        </div>
      </ThemeProvider>
    </div>
  )
}
