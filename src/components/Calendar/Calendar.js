import React, { useState } from 'react';

//MATERIAL UI CALENDAR
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker 
                inputFormat="MM/dd/yyyy"
                label="Date picker desktop"
                value={date}
                onChange={newDate => setDate(newDate)}
                renderInput={(params) => (
                <TextField
                    id="date-picker-desktop"
                    margin="normal"
                    {...params}
                    variant="standard"
                />
                )}
                OpenPickerButtonProps={{
                'aria-label': 'change date',
                }}
            />
        </LocalizationProvider>
    )
};

export default Calendar;