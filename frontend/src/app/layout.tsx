import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-full h-screen flex flex-col'>
          <div className='bg-zinc-300 h-8 flex items-center py-2'>
            <Image src="/LogoCV_128.png" alt="logoCV" width="24" height="24"></Image>
            <span className='text-sm text-zinc-700 font-semibold py-1 px-2 mx-2 rounded-lg hover:bg-sky-600 hover:text-zinc-300'>Home</span>
            <div className='grow items-center'></div>
            <span className='text-sm text-zinc-700 font-semibold py-1 px-2 mx-2 rounded-lg hover:bg-sky-600 hover:text-zinc-300'>Sign-Ins</span>
          </div>
          <div className='flex h-full'>
            <div className='bg-zinc-900 w-44'>
              Left Bar
            </div>
            <div className='bg-zinc-50 grow'>
            { children }
            </div>
          </div>
          <div className='bg-zinc-400'>
            Footer
          </div>
        </div>
      </body>
    </html>
  )
}
