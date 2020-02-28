import {pt2_misc_Popup,pt3_article4_Popup,pt3_conservation_areas_Popup,pt3_misc_Popup,pt3_planning_Popup,pt3_planning_notices_Popup,pt3_tpo_Popup,
    pt4_ancient_monuments_Popup,pt4_common_land_Popup,pt4_cpo_Popup,pt4_misc_Popup,pt4_pipelines_Popup,pt4_s38_Popup,pt4_smoke_control_areas_Popup,
    pt4_sssi_Popup,pt6a_advanced_payments_Popup,pt6a_misc_Popup,pt10_misc_Popup} from './Popups'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true
    },
    DynamicData: 
    [
        {
            key: 'os1250_line',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'Part 2 - Miscellaneous',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt2_misc.geojson',
            layerOptions: {
                onEachFeature: pt2_misc_Popup,
                maxZoom: 17,            
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Article 4',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_article4&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_article4_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Conservation Areas',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_conservation_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_conservation_areas_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Miscellaneous',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_misc_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Planning Apps',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_applications&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Planning Notices',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_notices&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_notices_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 3 - Tree Preservation Orders',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_tpo&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_tpo_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Ancient Monuments',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt4_ancient_monuments.geojson',
            layerOptions: {
                onEachFeature: pt4_ancient_monuments_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Common Land',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt4_common_land.geojson',
            layerOptions: {
                onEachFeature: pt4_common_land_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Compulsory Purchase Orders',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt4_cpo.geojson',
            layerOptions: {
                onEachFeature: pt4_cpo_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Miscellaneous',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_misc_Popup,
                maxZoom: 17,            
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Pipelines',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt4_pipelines.geojson',
            layerOptions: {
                onEachFeature: pt4_pipelines_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
                
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Section 38',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt4_s38.geojson',
            layerOptions: {
                onEachFeature: pt4_s38_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 18,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - Smoke Control Areas',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_smoke_control_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_smoke_control_areas_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 4 - SSSI',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_sssi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_sssi_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 6A - Advanced Payments',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt6a_advanced_payments.geojson',
            layerOptions: {
                onEachFeature: pt6a_advanced_payments_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 6A - Miscellaneous',
            url: 'http://scnwebdev1.stockport.gov.uk/mapping/layers/land_charges/pt6a_misc.geojson',
            layerOptions: {
                onEachFeature: pt6a_misc_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Part 10 - Miscellaneous',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt10_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt10_misc_Popup,
                maxZoom: 17,
                style: {
                    color: '#ff0000',
                    weight: 2,
                    opacity: 1,
                    fillColor: '#ff0000',
                    fillOpacity: 0.20
                }
            },
            DisplayOverlay: true,
            visibleByDefault: true
        },    
        ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration