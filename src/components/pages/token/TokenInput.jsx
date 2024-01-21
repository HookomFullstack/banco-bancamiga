import iconKey from '../../../assets/iconKeyGray.png'

export const TokenInput = ({token, handleChange, handleBlur, touched, errors }) => {
    return (
        <div className="inline-block w-full px-[20px] mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-[13px] font-bold">Introduzca la clave dinámica enviada vía SMS</label>
          <div className="inline-block relative w-full">
            <div className="absolute right-[10px] top-[4px] border-l-[1px] border-[#bdbdbc] flex items-center pl-2 h-6">
              <img className=" h-[12px]" src={iconKey} alt="" />
            </div>
            <input 
              name="token"
              onBlur={handleBlur}
              onChange={handleChange}
              inputMode='numeric'
              value={token.replace(/[^0-9]*$/, '')}
              type={'password'} 
              className="text-[13px] outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
              />
            </div>
          </div>
      </div>
    )
}
