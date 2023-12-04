
import './App.css';
import { Navigate, Route,  Routes } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Nominee from './pages/nominee/Nominee';

function App() {
    return (
     <Routes>
     <Route path="/" element={<Navigate to={'/login'} replace/>}/>
     <Route path="/nominee" element={<Nominee/>}/>
     <Route path="/login" element={<Login/>}/>
     </Routes>
)
}

export default App;
