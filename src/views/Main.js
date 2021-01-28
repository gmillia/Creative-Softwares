import React from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    mainRoot: {
        width: '100%',
        minHeight: '100vh'
    }
}))

const Main = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.mainRoot} >
            <Grid item xs={12}>
                ILLIA APP
            </Grid>
        </Grid>
    )
};

export default Main;