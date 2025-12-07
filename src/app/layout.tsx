import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/app-sidebar'

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <div className='flex flex-1 flex-col'>{children}</div>
        </SidebarProvider>
      </body>
    </html>
  )
}
