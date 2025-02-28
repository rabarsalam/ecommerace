import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-black text-8xl'> 
      <h2>نەدۆزراوە</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}