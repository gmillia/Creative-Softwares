import React, { useState } from 'react';

//MATERIAL UI CALENDAR
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <LocalizaitonProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="date"

                renderInput={(params) => <TextField {...params} variant="standard" />}
            />
        </LocalizaitonProvider>
    )
};

export default Calendar;