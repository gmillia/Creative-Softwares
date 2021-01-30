import React, { useState } from 'react';

//MATERIAL UI CALENDAR
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import { IconButton } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';

const WithDate = ({ params }) => {
    const ref = params ? params.inputRef : null;
    const inputProps = params ? params.inputProps : null;

    return (
        params ? 
        <div>
            <input
                ref={ref}
                {...inputProps}
            />
        </div>
        : null
    )
}

const WithoutDate = ({ setOpen, open, params }) => {
    const ref = params ? params.inputRef : null;
    return (
        <div>
            <IconButton ref={ref} onClick={(event) => { event.stopPropagation(); setOpen(!open) }}  >
                <EventRoundedIcon />
            </IconButton>
        </div>
    )
}

const DesktopCalendar = ({ date, setDate, open, setOpen, displayDate=false }) => {
    return (
        <DesktopDatePicker
            open={open}
            value={date} 
            onChange={newDate => setDate(newDate)}
            renderInput={(params) => (
                displayDate
                ? 
                <Grid item display='flex' alignItems='center' >
                    <WithDate params={params} />
                    <WithoutDate setOpen={setOpen} open={open} params={params} />

                </Grid>
                : <WithoutDate setOpen={setOpen} open={open} params={params} />
            )}
        />
    )
}

const MobileCalendar = ({ date, setDate, open, setOpen, displayDate=false }) => {
    return (
        <MobileDatePicker 
            open={open}
            value={date}
            onChange={newDate => setDate(newDate)}
            renderInput={(params) => (
                displayDate
                ? 
                <Grid item display='flex' alignItems='center' >
                    <WithDate params={params} />
                    <WithoutDate setOpen={setOpen} open={open} params={params} />

                </Grid>
                : <WithoutDate setOpen={setOpen} open={open} params={params} />
            )}
        />
    )
}

function Calendar({ setDateCallback, displayDate=false }) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const handleDateChange = (newDate) => {
        if(setDateCallback instanceof Function) setDateCallback(newDate);
        setDate(newDate);
        setOpen(!open)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
        {
            desktop 
            ? <DesktopCalendar date={date} setDate={handleDateChange} open={open} setOpen={setOpen} displayDate={displayDate} />
            : <MobileCalendar date={date} setDate={handleDateChange} open={open} setOpen={setOpen} displayDate={displayDate} />
        }
        </LocalizationProvider>

    )
};

export default Calendar;