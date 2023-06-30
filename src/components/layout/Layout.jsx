import { Footer } from './Footer'
import { Header } from './Header'
import { Navigation } from './Navigation'
import bgBanner from '../../assets/BancamigaEnLinea.jpg'
export const Layout = () => {
  return (
    <div
      style={{ 
        background: `url(${bgBanner})`,
        backgroundPosition: 'left',
        height: '100vh',
        width: '100vw',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        padding: '10px 14px',
        backgroundSize: 'cover'
      }}
      // className='flex justify-center items-center w-screen h-screen'
    >
      <div className='flex justify-center items-center h-full'>
        <main className='w-[600px] rounded-[3px] relative border-[1px] border-[rgba(0,0,0,0.2)] outline-none bg-[rgba(255,255,255,0.9)]  my-[30px] shadow-[0_5px_15px_0_rgba(0,0,0,0.3)]'>
          <div className='p-[20px]'>
            <Header />        
          </div>
          <div  className='border-[1px] border-[#fafafa]' />
          <div className='p-[35px]'>
            <Navigation/> 
          </div>

        </main>
      </div>
      <Footer/>
    </div>
  )
}
