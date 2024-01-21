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
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        padding: '10px 14px',
        backgroundSize: 'cover'
      }}
      className='sm:w-screen sm:h-screen w-full '
    >
      <div className='flex justify-center items-start h-full mb-20 md:mb-0'>
        <main className='md:w-[600px]  rounded-[3px] relative border-[1px] border-[rgba(0,0,0,0.2)] outline-none bg-[rgba(255,255,255,0.9)] mt-[10px]  md:my-[30px] shadow-[0_5px_15px_0_rgba(0,0,0,0.3)]'>
          <div className='p-[20px]'>
            <Header />        
          </div>
          <div  className='border-[1px] border-[#fafafa]' />
          <div>
            <Navigation/> 
          </div>

        </main>
      </div>
      <Footer/>
    </div>
  )
}
