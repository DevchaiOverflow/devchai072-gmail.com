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
        EsriLoader.loadModules([
                'esri/Map',
                'esri/views/MapView',
                "esri/widgets/BasemapToggle",
                "esri/widgets/BasemapGallery"
            ], { css: true }
        )
        .then(([ArcGISMap, MapView, BasemapToggle, BasemapGallery]) => {

            var map = new ArcGISMap({
                basemap: "streets-navigation-vector"
            })

            var view = new MapView({
                container: mapRef.current,
                map: map,
                center: [-118.80500, 34.02700], // longitude, latitude
                zoom: 13
            })

            // var basemapToggle = new BasemapToggle({
            //     view: view,
            //     nextBasemap: "satellite"
            // })
            // view.ui.add(basemapToggle, "bottom-right")

            // var basemapGallery = new BasemapGallery({
            //     view: view,
            //     source: {
            //       portal: {
            //         url: "https://www.arcgis.com",
            //         useVectorBasemaps: true  // Load vector tile basemaps
            //       }
            //     }
            // })
            // view.ui.add(basemapGallery, "bottom-right")
        })

    }

    return <MapManagerView 
        mapRef={mapRef}
    />
}

export default MapManager
