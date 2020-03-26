import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SplitPane, { Pane } from 'react-split-pane'
import './style.css'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    // top: 500,
    bottom: 0,
    width: '100%',
    height: '50%',
    position: 'absolute',
  }
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BottomPanel = props => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span />
      <Paper style={{ height: '100%', width: '100%' }}>
        foo
      </Paper>
    </div>
  )
}

export default BottomPanel
