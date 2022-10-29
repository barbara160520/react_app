import React from 'react';
import { userSelector } from '../redux/reducers/usersReducer/userSelector';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

const ProtectedRoutes = ({children}) => {

    const user = useSelector(userSelector);

    if(!user){
        return <LoadingToRedirect/>
    }
    return children

};

export default ProtectedRoutes;