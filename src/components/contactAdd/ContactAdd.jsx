import React from 'react'
import { CardEdit } from '../cardEdit/CardEdit'
import './contactAdd.CSS'

export const ContactAdd = () => {
    return (
        <div style={{ width: '40%', borderRadius:'5px',
            backgroundColor:'#373b3e'}}>
            <p style={{color: 'white', backgroundColor:'#212529',textAlign:"center",padding:"2px 0"}}>New Contact</p>
            <CardEdit/>
        </div>
    )
}
