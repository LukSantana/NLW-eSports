import React from 'react'

interface AdProps {
    label: string,
    value: string
}

const AdInfo = ({ label, value }: AdProps) => {
    return (
        <div className="w-[100%] mb-2">
            <h1 className=' text-[#D4D4D8] text-sm mb-1'>{label}</h1>
            <span className='text-sm font-bold text-white'>{value}</span>
        </div>
    )
}

export default AdInfo