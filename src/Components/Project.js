import React from 'react'

export default function Project(props) {
  return (
    <div className="project">
        {props.title}
        <input type="checkbox" className="project__checkbox" />
    </div>
  )
}
