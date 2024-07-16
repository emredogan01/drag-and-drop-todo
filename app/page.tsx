import Columns from '@/components/columns'

export default function Home() {
  return (
    <section className='flex h-screen bg-gradient-to-br from-gray-600 to-gray-500 py-12 text-white'>
      <div className='mx-auto w-full max-w-7xl px-6'>
        <Columns />
      </div>
    </section>
  )
}
