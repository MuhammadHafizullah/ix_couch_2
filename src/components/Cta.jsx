import React from 'react'

const Cta = (props) => {
  return (
    <a href={props.link} className='px-10 mb-10 py-4 font-exo text-xl inline-block text-white bg-gradient-to-r rounded-md from-primary to-secondary'>{props.text}</a>
  )
}

export default Cta