import './globals.css'
export default function RootLayout({ children }) {
  return (
    <main lang="en">
      <div className='flex'> 
      {children}
      </div>
    </main>
  )
}
