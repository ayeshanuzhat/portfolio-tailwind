import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app",
        tags: ["React", "Node", "CSS", "Typesript"],
    },
    {
        id: 1,
        title: "Simple Calculator Project",
        desc: "A Basic HTML CSS and TypeScript calculator",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title: "Currency Converter Project",
        desc: "A simple HTML and TypeScript powered tool",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
