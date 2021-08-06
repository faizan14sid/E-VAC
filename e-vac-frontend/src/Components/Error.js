import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Error = () => {
    const history = useHistory();
    useEffect(() => {
        window.alert("please Login for book a ambulance")
        history.push("/")

    })
    return (
        <div>

        </div>
    )
}
export default Error;