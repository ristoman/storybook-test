import React from 'react';
import './inputField.scss';


export const InputField = ({ placeholderText="Type here..." }) => {
    return (
        <input placeholder={placeholderText} type='text'>
        </input>
    )
}