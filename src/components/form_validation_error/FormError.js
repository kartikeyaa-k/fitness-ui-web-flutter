import React from 'react'
import '../form_validation_error/form_error.css'

const FormError = ({errorMessage}) => {
  return (
    <div className='errorMessage'>{errorMessage}</div>
  )
}

export default FormError