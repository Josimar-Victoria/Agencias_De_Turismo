import React from 'react'
import { Footter } from './Footter'
import { Header } from './Header'


export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footter/>
        </div>
    )
}
