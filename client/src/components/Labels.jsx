import React from 'react'


const obj = [
    {
        type:"Savings",
        color:'#f9c74f',
        percent:45
    },
    {
        type:"Investment",
        color:'#f9c74f',
        percent:20
    },
    {
        type:"Expense",
        color:'#f9c74f',
        percent:45
    },
]
function Labels() {
  return (
    <>
        {obj.map((value, index)=> <LabelComponents key={index} data={value}></LabelComponents>)}
    </>
  )
}

function LabelComponents({data}){
    if(!data) return <></>;
    return(
        <div className='flex w-full justify-between'>
            <div className='flex w-full  justify-between'>
                <h3 className='text-xl '>
                <span className={`bg-[${data.color}] rounded-full px-1 mr-2`}></span>
                {data.type ?? ""}
                </h3>
                <h3 className='text-xl '>{data.percent ?? 0}%</h3>
            </div>
        </div>
    )
}
export default Labels