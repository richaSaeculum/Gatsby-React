import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../containers/about'
import BlogList from '../containers/blog-list/BlogList'
import BlogPost from '../containers/blog-post'
import Contact from '../containers/contact'
import PersonalBlog from '../containers/home'
import NotFound from '../containers/not-found'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PersonalBlog />} />
        <Route path=':postid' element={<BlogPost/>} />
        <Route path='page/:id' element={<BlogList />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='404' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
