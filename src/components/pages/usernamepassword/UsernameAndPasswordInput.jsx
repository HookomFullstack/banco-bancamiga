import { useState } from "react";
import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector";

export const UsernameAndPasswordInput = ({
  username, password, typeDocument, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
  selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <select name="typeDocument" id="typeDocument" className="focus:border-[#5D98CC] transition-all p-[5px] h-[32px] outline-none border-[#BDBDBD] border-[1px]">
        <option value="Venezolano">Venezolano</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Jurídico">Pasaporte</option>
        <option value="Extranjero">Extranjero</option>
        <option value="Gubernamental">Gubernamental</option>
        <option value="Comuna">Comuna</option>
      </select>
      <div className="flex gap-10">
        <div className="inline-block">
          <label htmlFor="username">Nombre de Usuario</label>
          <input 
            type="text" 
            name="username" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={username}
            inputMode="text"
            className="outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
          />
        </div>
        <div className="inline-block">
          <label htmlFor="username">Ingrese su contraseña</label>
          <input 
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={virtualKeyword === true ? valueKeyBoardVirtual : password}
            type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
            className="outline-none w-full border-[1px] h-[32px] bg-white border-[#BDBDBD] hover:border-[#5D98CC] transition-all py-[5px] pl-[10px] pr-[37px]"
          />
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
      
    </>
  )
}
