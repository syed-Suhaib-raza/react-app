import './App.css'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import Home from './home.jsx';
import List from './list.jsx'
import FList from './flist.jsx';
import AddU from './adduser.jsx';
import Patch from './patchuser.jsx';
import DeleteU from './deleteuser.jsx';
console.log('App is running')

function App() {
  console.log('app func is online');
  return (
    <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/users' element={<List />} />
          <Route path ='/fusers' element={<FList />} />
          <Route path='/add' element={<AddU />} />
          <Route path='/delete' element={<DeleteU />} />
          <Route path='/patch' element={<Patch />} />
          <Route path='/*' element={<h1>Error 404: Page not found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
