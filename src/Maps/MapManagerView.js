import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        padding: 0,
        width: '100%',
        top: '60px',
        height: 'calc(100% - 60px)',
        position: 'absolute',
    }
}))

const MapManagerView = props => {

    const {
        mapRef,
    } = props
    
    const classes = useStyles()

    return <Grid className={classes.root} ref={mapRef}></Grid>
}

export default MapManagerView
