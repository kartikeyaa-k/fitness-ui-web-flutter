import React from 'react'
import { useState } from 'react'
// css imports
import './customize_workouts.css';
import '../metric/metric.css'

// components imports
import Metrics from '../metrics/Metrics';
import FormError from '../form_validation_error/FormError';
import CustomizeWorkoutHeader from './CustomizeWorkoutHeader';

const CustomizeWorkouts = () => {

  const [label, setLabel] = useState('')
  const [weight, setWeight] = useState('')
  const [activeMetricID, setActiveMetricID] = useState('');
  const [metrics, setMetrics] = useState([
    {
      id: 1,
      label: 'Back',
      weight: '225',
      unit: 'lbs'
    },
    {
      id: 2,
      label: 'Shoulder Press',
      weight: '90',
      unit: 'lbs'
    },
    {
      id: 3,
      label: 'Bench Press',
      weight: '190',
      unit: 'lbs'
    }
  ])
  const [weightFormFieldError, setWeightFormFieldError] = useState(false);
  const [labelFormFieldError, setLabelFormFieldError] = useState(false);
  const onSelected = (e) => {
    setActiveMetricID(e.id)
    setLabel(e.label)
    setWeight(e.weight)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!label) {
      alert('Please add label')
      return
    }
    if (!weight) {
      alert('Please add weight')
      return

    }
    console.log(activeMetricID)
    setMetrics(metrics.map((metric) => metric.id === activeMetricID ? { ...metric, weight: weight, label: label } : metric))
    console.log(metrics)
    setActiveMetricID('')
    setLabel('')
    setWeight('')
  }

  const onLabelChange = (e) => {
    const regex = new RegExp('[a-zA-Z][a-zA-Z ]*$');
    if (regex.test(e.target.value) || e.target.value === '') {
      console.log('good')

      setLabelFormFieldError(false)
      setLabel(e.target.value)
      setMetrics(metrics.map((metric) => metric.id === activeMetricID ? { ...metric, label: e.target.value } : metric))

    } else {
      console.log('bad')

      setLabelFormFieldError(true)
    }

  }

  const onWeightChange = (e) => {
    console.log(e);
    if (e.target.value > 350) {
      setWeightFormFieldError(true)
    } else {
      setWeightFormFieldError(false)
      setWeight(e.target.value)
      setMetrics(metrics.map((metric) => metric.id === activeMetricID ? { ...metric, weight: e.target.value } : metric))

    }
  }






  return (
    <section id='customize_workout'>
      <div className="container header__container">
        {/* Hardcoding For Demo Purpose */}
        <CustomizeWorkoutHeader />
        {/* Bubble Form */}

        <fieldset disabled={activeMetricID === '' ? true : false}>
          <div className='form__container'>
            <div className='profile__me'>
              <form className='add-form' onSubmit={onSubmit}  >
                <div className='form-control'>
                  <input className="input-form-field" type='text' placeholder='Add Label' maxLength="15" required={true}
                    value={label} onChange={(e) => onLabelChange(e)}
                  />
                  {labelFormFieldError && <FormError errorMessage={"*Please enter any alphabets"} />}
                </div>

                <div className='form-control'>
                  <input className="input-form-field" type='number' placeholder='Add Weight' min="0" max="350" required={true}
                    value={weight} onChange={(e) => onWeightChange(e)}
                  ></input>
                </div>
                {weightFormFieldError && <FormError errorMessage={"*Please enter value between 0 to 350"} />}
                

              </form>
            </div>
          </div>
        </fieldset><br />

        {/* Metrics bubble Component*/}
        {/* Passing the list from here*/}
        <div className='metrics'>
          {metrics.length > 0 ? <Metrics metrics={metrics} onSelected={onSelected} activeMetricID={activeMetricID} /> : 'Something Went Wrong'}
        </div>
      </div>
    </section>
  )
}

export default CustomizeWorkouts