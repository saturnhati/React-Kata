import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import useFetch from 'utils/methods';
import { format } from 'date-fns'
import Button from './library/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormControlAppts.css';

export default function RadioButtonsGroup({ serviceId }) {
    const { data, loading } = useFetch({ endpoint: '/appointments/' + serviceId });
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const chosenAppt = data.find(element => element.id === selectedOption)
        const apptTime = chosenAppt.apptStartTime
        navigate(`/booking/${selectedOption}`, { state: { time: apptTime } });
    }


    return (
        <form className='formRadio' onSubmit={handleFormSubmit}>
            <FormControl>
                <FormLabel className="form-label" id="demo-radio-buttons-group-label">Available appointments:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    {loading && <p>Loading...</p>}
                    {!loading && data.map((appointment) => (
                        <FormControlLabel className="radio-button" key={appointment.id} value={appointment.id} control={<Radio />} label={format(new Date(appointment.apptStartTime), 'EEEE, MMM do p')} />
                    ))}
                    <Button children="Book Now" type="submit" className="book-button" />
                </RadioGroup>
            </FormControl>
        </form>
    );
}