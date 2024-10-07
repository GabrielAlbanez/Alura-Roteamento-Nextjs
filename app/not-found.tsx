import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <h2 className='text-2xl'>Rota nao encontrada😢</h2>
      
      <Link href="/"><button className='px-2 py-2 rounded-md border-white border-[1px]'>Retornar para a pagina Home</button></Link>
    </div>
  )
}