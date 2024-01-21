import { useState } from "react";
import iconUser from '../../../assets/iconUserGray.png'
import iconKey from '../../../assets/iconKeyGray.png'

export const UsernameAndPasswordInput = ({
  username, password, nroDocument, typeDocument, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
}) => {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-[15px] md:gap-5">
      <div className="flex flex-col gap-2 justify-between md:flex-row md:gap-7 ">
        <div className="inline-flex flex-col gap-1">
          <label htmlFor="typeDocument" className="text-[13px]">Tipo de Documento</label>
          <select onChange={handleChange} onBlur={handleBlur} value={typeDocument} defaultValue={'Venezolano'} name="typeDocument" id="typeDocument" className="focus:border-[#5D98CC] transition-all p-[5px] h-[32px] outline-none border-[#BDBDBD] border-[1px] text-[13px]">
            <option value="Venezolano">Venezolano</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Jurídico">Jurídico</option>
            <option value="Extranjero">Extranjero</option>
            <option value="Gubernamental">Gubernamental</option>
            <option value="Comuna">Comuna</option>
          </select>
        
        </div>
        <div className="w-full flex flex-col gap-1">
         
          <label htmlFor="nroDocument" className="text-[13px]">Número de Documento</label>
          <div className="inline-block relative w-full">
            <div className="absolute right-[10px] top-[4px] border-l-[1px] border-[#bdbdbc] flex items-center pl-2 h-6">
              <img className=" h-[12px]" src={iconUser} alt="" />
            </div>
            <input 
              type="password" 
              name="nroDocument" 
              onBlur={handleBlur}
              onChange={handleChange}
            // value={cvv.slice(0, 3).replace(/[^0-9]*$/, '')}

              value={nroDocument.replace(/[^0-9]*$/, '').slice(0, 10)}
              inputMode="numeric"
              className="text-[13px] outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
            />
          </div>
        
        </div>

      </div>

      <div className="flex gap-2 flex-col items-start md:flex-row md:gap-10">

        <div className="inline-block w-full">
          <div className="flex relative flex-col gap-1">
              <label htmlFor="username" className="text-[13px]">Nombre de Usuario</label>
              <div className="inline-block relative w-full">
                <div className="absolute right-[10px] top-[4px] border-l-[1px] border-[#bdbdbc] flex items-center pl-2 h-6">
                  <img className=" h-[12px]" src={iconUser} alt="" />
                </div>
                <input 
                  type="text" 
                  name="username" 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={username.slice(0,22)}
                  inputMode="text"
                  className="text-[13px] outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
                />
              </div>
          </div>
        </div>

        <div className="inline-block w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-[13px]">Ingrese su contraseña</label>
            <div className="inline-block relative w-full">
              <div className="absolute right-[10px] top-[4px] border-l-[1px] border-[#bdbdbc] flex items-center pl-2 h-6">
                <img className=" h-[12px]" src={iconKey} alt="" />
              </div>
              <input 
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={password.slice(0, 16)}
                type={'password'} 
                className="text-[13px] outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
                />
              </div>
            </div>
        </div>
      </div>
      {/* 
        {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        } 
      */}


      {/* 
        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
      */}
      
      {
        showPasswordMode === true ? 
          (
            <div>
              <input 
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox" 
                id="passwordView" 
              />
              <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
            </div>
          ) 
        :  null
      }
      
    </div>
  )
}
