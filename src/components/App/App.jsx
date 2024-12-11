import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import AddReview from '../pages/AddReview/AddReview';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import SingleReview from '../pages/SingleReview/SingleReview';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';

import './app-module.scss'


const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registration' element={<RegisterPage />} />
                    <Route path='/add-review' element={<AddReview />} />
                    <Route path='/admin-panel' element={<AdminPanel />}/>
                    <Route path='/reviews/:id' element={<SingleReview />} />
                </Routes>
            </Router>
        </>
    )
}

export default App