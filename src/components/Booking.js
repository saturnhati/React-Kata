import { useParams, useLocation } from "react-router-dom"
import { useState, useRef } from "react";
import { format } from 'date-fns'
import Button from "./library/Button";
import axios from "../../node_modules/axios/index";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useNavigate } from 'react-router-dom';
import './Booking.css';

export default function Booking() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const emailRef = useRef(null);
    const fullNameRef = useRef(null);
    const carMakeRef = useRef(null);
    const carModelRef = useRef(null);
    const yearRef = useRef(null);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsDialogOpen(true);
    };

    const handleDialogConfirm = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const fullname = fullNameRef.current.value;
        const carMake = carMakeRef.current.value;
        const carModel = carModelRef.current.value;
        const year = yearRef.current.value;
        const userInfos = { "email": email, "name": fullname, "make": carMake, "model": carModel, "modelYear": year }
        console.log(userInfos);
        try {
            const res = await axios.post(`http://localhost:2000/appointments/${id}`, userInfos)
            setIsDialogOpen(false);
            console.log('Appointment booked successfully!');
            navigate('/success', { state: { response: res.data } });
        } catch (error) {
            console.log(error);
            alert('An error occurred while booking the appointment. Please try again later.');
        }
    };

    const handleDialogCancel = () => {
        setIsDialogOpen(false);
    };


    return (
        <>
            <h2>Book Your Appointment</h2>
            <div className="container-booking">
                <h3>Selected appointment:</h3>
                {location.state != null ? <p className="selected-appt">{format(new Date(location.state.time), 'EEEE, MMM do p')}</p> : ""}
                <hr />
                <form id="bookingForm" onSubmit={handleSubmit}>
                    <div>
                        <input name="email" type="email" label="Email Address" ref={emailRef} placeholder="Email" required />
                        <input name="fullname" type="text" label="Full Name" ref={fullNameRef} placeholder="Full Name" required />
                    </div>
                    <div>
                        <input name="carMake" type="text" label="Car Make" variant="outlined" ref={carMakeRef} placeholder="Car Make" required />
                        <input name="carModel" type="text" label="Car Model" variant="outlined" ref={carModelRef} placeholder="Car Model" required />
                        <input name="year" type="number" label="Year" variant="outlined" ref={yearRef} placeholder="Year" required />
                    </div>
                    <Button children="Book" type="submit" className="book-button" />
                </form>
            </div>
            {isDialogOpen && (
                <Dialog className="dialog" open={isDialogOpen} onClose={handleDialogCancel}>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Are you sure you want to book this appointment?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="book-button" onClick={handleDialogCancel}>No</Button>
                        <Button className="book-button" onClick={handleDialogConfirm}>Yes</Button>
                    </DialogActions>
                </Dialog>
            )}

        </>
    )
}