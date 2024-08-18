import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Watch from "./components/Watch"
import Home from './components/Home'
import Explore from './components/Explore'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/watch' element={<Watch />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}

export default App
