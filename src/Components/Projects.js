import React from 'react'
import Navlinks from './Navlinks'
import Project from './Project'

export default function Projects() {
  return (
    <>
      <Navlinks/>
      <div className="projects">
        <Project title={"Проект 1"} key={1}/>
        <Project title={"Проект 2"} key={2}/>
        <Project title={"Проект 3"} key={3}/>
        <Project title={"Проект 4"} key={4}/>
        <Project title={"Проект 5"} key={5}/>
        <Project title={"Проект 6"} key={6}/>
        <Project title={"Проект 7"} key={7}/>
      </div>
    </>
  )
}
