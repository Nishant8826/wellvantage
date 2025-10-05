import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Leads from './pages/Leads'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { checkAuth } from './store/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);


  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ProtectedRoute><Signup /></ProtectedRoute>} />
        <Route path='/lead' element={<ProtectedRoute><Leads /></ProtectedRoute>} />
        <Route path='/leadmanagement' element={<ProtectedRoute><Leads /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
