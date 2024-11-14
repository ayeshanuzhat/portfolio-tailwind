import React from 'react'

interface propsType {
  title: string;
  desc: string;
  tags: string[];
}

const Card:React.FC<propsType> = ({ title, desc, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='tags' key={el}>
              {el}
            </div>))}
        </div>
      </div>
    </div>

  )
}

export default Card
