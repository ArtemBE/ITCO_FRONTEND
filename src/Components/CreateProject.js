import React from 'react'
import NavLinksCreate from './NavLinksCreate'
import CreateProjectSection from './CreateProjectSection'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

export default function CreateProject() {
  return (
    <div className="container">
        <NavLinksCreate/>
        <Routes>
          <Route path=':id' element={<CreateProjectSection/>}></Route>
        </Routes>
    </div>
  )
}
