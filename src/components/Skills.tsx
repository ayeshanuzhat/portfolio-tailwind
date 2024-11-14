import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
          <div>
            <h2 className='text-4xl md:text-5xl'>SKILLS I have</h2>
          </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-3xl'>
              <div className='space-y-2'>
                <h2>Typescript</h2>
                <h2>React.js</h2>
                <h2>Next.js</h2>
              </div>

              <div className='space-y-2'>
                <h2>Tailwind</h2>
                <h2>CSS</h2>
                <h2>Node.js</h2>
              </div>
            </div>
        </div>
    </div>
    
            
        
    )
}

export default Skills
