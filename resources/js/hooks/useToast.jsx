// useToast.js
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
    useEffect(() => {
        const toastContainer = document.createElement("div");
        toastContainer.id = "toastContainer";
        document.body.appendChild(toastContainer);

        return () => {
            document.body.removeChild(toastContainer);
        };
    }, []);

    const showToast = (message, type, onClose) => {
        toast[type](message, { onClose });
    };

    return showToast;
};

export default useToast;
