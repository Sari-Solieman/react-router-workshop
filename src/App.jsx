import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/authContext'

import Header from "./components/Header"
import Watch from "./components/Watch"
import Explore from './components/Explore'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

    return (
        <AuthContextProvider>
            <Header />

            <Routes>
                <Route path='/watch' element={<Watch />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </AuthContextProvider>
    )
}

export default App
