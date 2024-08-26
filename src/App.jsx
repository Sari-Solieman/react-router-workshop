import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/authContext'

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from "./components/Header"
import RecipesList from './components/RecipesList'
import Explore from './components/Explore'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

    return (
        <AuthContextProvider>
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Routes>
                    <Route path='/recipeslist' element={<RecipesList />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </Container>
        </AuthContextProvider>
    )
}

export default App
