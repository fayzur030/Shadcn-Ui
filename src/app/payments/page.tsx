import { columns, Payment } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    {
      id: '728ed52a',
      amount: 150,
      status: 'processing',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    {
      id: '728ed52b',
      amount: 200,
      status: 'pending',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    {
      id: '728ed52c',
      amount: 250,
      status: 'pending',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    {
      id: '728ed52d',
      amount: 300,
      status: 'pending',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    {
      id: '728ed52d',
      amount: 300,
      status: 'pending',
      email: 'm@example.com',
      name: 'Abdullah',
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
