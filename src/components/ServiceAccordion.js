import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlAppts from './FormControlAppts';
import './ServiceAccordion.css';

export default function ServiceAccordion({ serviceName, serviceId }) {

    return (
        <div className="accordion">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="serviceTitle">{serviceName}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                    <hr />
                    <FormControlAppts serviceId={serviceId} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}