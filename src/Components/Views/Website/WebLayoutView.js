import React from 'react'
import AppBar from '../../Containers/Header/AppBar'
import MapManager from '../../../Maps/MapManager'
import BottomPanel from './Result/BottomPanel'

const WebLayoutView = props => {
    return (<>
        <AppBar />
        <MapManager />
        <BottomPanel />
    </>)
}

export default WebLayoutView
