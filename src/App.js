import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './containers/about';
import Contact from './containers/contact';
import NotFound from './containers/not-found';
import PersonalBlog from './containers/home';
import BlogList from './containers/blog-list/BlogList';
import BlogPost from './containers/blog-post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalBlog />} />
        <Route path=':postid' element={<BlogPost />} />
        <Route path='page/:id' element={<BlogList />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
// import './App.css';
// import About from './containers/about';
// import Contact from './containers/contact';
// import NotFound from './containers/not-found';
// import PersonalBlog from './containers/home';
// import Layout from './components/layout';

// function App() {
//   return (
//     <Outlet />
//   );
// }

// export default App;
