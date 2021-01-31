import React, { useState } from 'react';
import PropTypes from 'prop-types';

//MATERIAL UI CALENDAR
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import { IconButton } from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';

/**
 * Helper component to be used when Calendar needs to be used with the input field.
 */
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

/**
 * Helper component to be used when Calendar needs to be displayed without an input field.
 */
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

/**
 * Component which displays Calendar on Desktop.
 * @param {String}      date    current date value
 * @param {Function}    setDate Callback function which is used to set new date. 
 * @param {Boolean}     open    Specifies whether Calendar is opened.
 * @param {Function}    setOpen Callback function used to control whether or not Calendar is open.
 * @param {Boolean}     displayDate Specifies whether input field should be displayed along with the Calendar icon.
 */
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

/**
 * Component which displays Calendar on Mobile.
 * @param {String}      date    current date value
 * @param {Function}    setDate Callback function which is used to set new date. 
 * @param {Boolean}     open    Specifies whether Calendar is opened.
 * @param {Function}    setOpen Callback function used to control whether or not Calendar is open.
 * @param {Boolean}     displayDate Specifies whether input field should be displayed along with the Calendar icon.
 */
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

/**
 * Component which displays calendar.
 * 
 * @param {Function}    setDateCallback     Callback function which can be called when date changes and 'parent' component needs to receive date update.
 * @param {Boolean}     displayDate         Specifies whether or not to dispplay input field with the date in it [DEFAULT: False]
 * @param {String}      initialDate         Specifies the date that calendar is going to use as its default value.  
 */
function Calendar({ setDateCallback, displayDate=false, initialDate }) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [date, setDate] = useState(initialDate ? initialDate : new Date());
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

Calendar.propTypes = {
    setDateCallback: PropTypes.func,
    displayDate: PropTypes.bool,
    initialDate: PropTypes.any,
}

export default Calendar;