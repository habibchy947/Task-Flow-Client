import { useContext } from "react";
import Loading from "../Components/Loading";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/'></Navigate>
    );
};

export default PrivateRoute;