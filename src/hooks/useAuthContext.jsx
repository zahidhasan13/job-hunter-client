import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;

};

export default useAuthContext;