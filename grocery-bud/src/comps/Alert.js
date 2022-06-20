import { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        },3000)
        return () => clearTimeout(timeout)
    },[removeAlert, list])

    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert;