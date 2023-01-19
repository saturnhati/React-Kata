import { Link, useLocation } from "react-router-dom"
import format from "date-fns/format"
import './Success.css';
import Button from "./library/Button";

export default function Success() {
    const location = useLocation()
    const apptData = location.state.response
    console.log(apptData)


    return (
        <div className="container">
            <h1>Booking Confirmed!</h1>
            <hr />
            <img alt="Success" src={require("../assets/images/success-icon.svg").default} maxWidth={200} />
            <h2>Service Infos</h2>
            <p>Service: {apptData.serviceName}</p>
            <p>Date and Time: {format(new Date(apptData.apptStartTime), 'EEEE, MMM do p')}</p>
            <h2>User Infos</h2>
            <p>Name: {apptData.name}</p>
            <p>Email: {apptData.email}</p>
            <p>Make and Model: {apptData.make} {apptData.model}</p>
            <p>Year: {apptData.modelYear}</p>
            <Link to="/">
                <Button children="Return to Home" />
            </Link>
        </div>
    )
}