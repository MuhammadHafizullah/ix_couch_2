import React from 'react'

const Icon_card = (props) => {
    const keys = Object.keys(props.content)
    
    return(
        keys.map((key)=>{
            const cn = props.content[key]
            console.log(cn.heading)
            return(
                <div className="p-4" key={key}>
                    <img className='w-20 mx-auto mb-10' src={cn.image} alt={cn.heading} />
                    <h3 className='text-3xl text-white font-mont mb-5'>{cn.heading}</h3>
                    <p className='text-white font-garet text-xl'>{cn.desc}</p>
                </div>
            )
        })
    )
    
}

export default Icon_card