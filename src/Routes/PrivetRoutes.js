// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../Hooks/Auth/useAuth';
// import { ScaleLoader } from 'react-spinners';

// const PrivetRoutes = ({ children }) => {
//    const { loading, user } = useAuth();
//    const location = useLocation();

//    if (loading) {
//       return <div className='h-screen flex justify-center items-center'><ScaleLoader color="#36d7b7" className='text-5xl' /></div>;
//    }

//    if (user || user?.uid) {
//       return children;
//    }

//    return <Navigate to='/login' state={{ from: location }} replace />;
// };

// export default PrivetRoutes;