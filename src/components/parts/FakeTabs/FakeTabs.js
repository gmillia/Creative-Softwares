import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//MATERIAL ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fakeTabsRoot: {
        paddingLeft: 15,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 0,
        }
    },
    selected: {
        fontWeight: 800
    },
    fakeButton: {
        padding: '0px 15px 5px 0px',
        cursor: 'pointer'
    }
}))

const LABELS = ['Pending', 'Completed'];

/**
 * Component which is used as FakeTabs. 
 * @param {Function} setTabCallback Callback function which can be used to set current tab in the parent component. 
 */
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
        <Grid container className={classes.fakeTabsRoot} >
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

FakeTabs.propTypes = {
    setTabCallback: PropTypes.func,
}

export default FakeTabs;