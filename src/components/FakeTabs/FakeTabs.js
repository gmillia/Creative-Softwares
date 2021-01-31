import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

//MATERIAL ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    selected: {
        fontWeight: 800
    },
    fakeButton: {
        padding: '0px 15px 5px 0px',
        cursor: 'pointer'
    }
}))

const LABELS = ['Pending', 'Completed'];

const FakeTabs = ({ setTabCallback }) => {
    const [tab, setTab] = useState(LABELS[0]);
    const classes = useStyles();

    const handleClick = (newTab) => {
        setTab(newTab);
        if(setTabCallback instanceof Function) setTabCallback(newTab);
    }

    useEffect(() => {
        if(setTabCallback instanceof Function) setTabCallback(tab);
    }, [])

    return (
        <Grid container>
            {
                LABELS.map((tabLabel, index) => {
                    return (
                        <div 
                            key={index} 
                            onClick={() => handleClick(tabLabel)} 
                            className={clsx(classes.fakeButton, tab === tabLabel ? classes.selected : '')}
                        >
                            {tabLabel}
                        </div>
                    )
                })
            }
        </Grid>
    )
};

export default FakeTabs;