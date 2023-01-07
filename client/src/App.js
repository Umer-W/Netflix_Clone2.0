import React from 'react';
import { Route, Routes } from "react-router-dom"
import SignIn from "./Components/SignIn";
import SignUp from './Components/SignUp';
import SignUpTwo from './Components/SignUpTwo';
import Main from "./Components/Main"
import TVshows from './Components/TVshows';
import Movies from './Components/Movies';
import MyList from './Components/MyList';
import Latest from './Components/Latest';
import Home from "./Components/Home"
import Admin from './Components/AdminPortal/Admin';
import Error from './Components/Erro';
import { useCookies } from 'react-cookie';
import MovieDetail from './Components/MovieDetail';
function App() {

  const [cookies, setCookie] = useCookies()


  return (
    <div >

      <Routes>
        <Route path='/' element={<Home />} />
        {cookies.email && <>
          <Route path='/Main' element={<Main />} />
          <Route path='/TVshows' element={<TVshows />} />
          <Route path='/Mylist' element={<MyList />} />
          <Route path='/Latest' element={<Latest />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/MovieDetail' element={<MovieDetail />} />  </>

        }
        <Route path='/Admin' element={<Admin />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignUpTwo' element={<SignUpTwo />} />
        <Route path='*' element={<Error />} />



      </Routes>
    </div>
  );
}

export default App;
