
import loading from '../assets/loading.webp'
export const Spiner = ({tokenMode = false, seconds}) => {
  return (
    <div className='flex justify-center items-center'>
      <img className='h-[30px]' src={loading} alt="" />
      {
        tokenMode 
          ? (<p className='text-[13px]'>Estamos verificando tu información, espere <span className='font-bold'> {seconds}</span> segundos...</p>) 
          : (<p className='text-[13px]'>Cargando, Por favor espere un momento...</p>
        )
      }
    </div>
  )
}
