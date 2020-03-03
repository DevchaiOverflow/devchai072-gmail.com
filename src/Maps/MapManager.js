import React, { useEffect, useRef } from 'react'
import EsriLoader from 'esri-loader'
import MapManagerView from './MapManagerView'

const MapManager = props => {

    const mapRef = useRef()

    useEffect(() => {
        createMap()
    })

    const createMap = () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        EsriLoader.loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
        .then(([ArcGISMap, MapView]) => {
            const map = new ArcGISMap({
                basemap: 'topo-vector'
            })

            // load the map view at the ref's DOM node
            const view = new MapView({
                container: mapRef.current,
                map: map,
                center: [-118, 34],
                zoom: 13
            })

            return () => {
                if (view) {
                    // destroy the map view
                    view.container = null
                }
            }
        })
    }

    return <MapManagerView 
        mapRef={mapRef}
    />
}

export default MapManager
