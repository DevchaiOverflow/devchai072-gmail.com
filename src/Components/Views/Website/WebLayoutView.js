import React from 'react'
import AppBar from '../../Containers/Header/AppBar'
import MapManager from '../../../Maps/MapManager'
import BottomPanel from './Result/BottomPanel'
import BottomPanel2 from './Result/BottomPanel2'

const WebLayoutView = props => {
    return (<>
        <AppBar />
        <MapManager />
        <BottomPanel />
        {/* <BottomPanel2 /> */}
    </>)
}

export default WebLayoutView
