import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside'

//MATERIAL UI CALENDAR
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

const DesktopCalendar = ({ date, setDate, open, setOpen }) => {
    return (
        <DesktopDatePicker
            open={open}
            value={date} 
            onChange={newDate => setDate(newDate)}
            renderInput={(params) => (
                <TextField {...params} margin="normal" variant='outlined' onClick={() => setOpen(!open)}/>
            )}
        />
    )
}

const MobileCalendar = ({ date, setDate, open, setOpen }) => {
    return (
        <MobileDatePicker 
            open={open}
            value={date}
            onChange={newDate => setDate(newDate)}
            renderInput={(params) => (
                <TextField {...params} margin="normal" variant="standard" onClick={() => setOpen(!open)} />
            )}
        />
    )
}

function Calendar({ setDateCallback }) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const handleDateChange = (newDate) => {
        if(setDateCallback instanceof Function) setDateCallback(newDate);
        setDate(newDate);
    }

    Calendar.handleClickOutside = () => {
        setOpen(false);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
        {
            desktop 
            ? <DesktopCalendar date={date} setDate={handleDateChange} open={open} setOpen={setOpen} />
            : <MobileCalendar date={date} setDate={handleDateChange} open={open} setOpen={setOpen} />
        }
        </LocalizationProvider>

    )
};

const clickOutsideConfig = {
    handleClickOutside: () => Calendar.handleClickOutside
}

export default onClickOutside(Calendar, clickOutsideConfig);