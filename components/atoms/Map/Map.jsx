import styles from './Map.module.scss'
import 'leaflet/dist/leaflet.css' 
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModalGraphic, setModalProposal, setOpenModalGraphic, setOpenModalProposal } from 'actions/general'

const MyMap = ({ type = 'progressivity', countries }) => {
  const [map, setMap] = useState(null);
  const dispatch = useDispatch()
    
  useEffect(() => {
    const data = require('react-leaflet')
    setMap(data);

  },[])

  useEffect(() => {
    const L = require('leaflet')
  }, [])

  const position = [-1.416097, -25.616672]

  if (map) {
    const { MapContainer, TileLayer, Marker, Popup } = map;

    // Icon Marker Red
    const iconMarker = L.icon({
      iconUrl: '/img/icons/marker-red.svg',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    });

    // Icon Marker Yellow
    const iconMarkerYellow = L.icon({
      iconUrl: '/img/icons/marker-yellow.svg',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    });

    // Icon Marker Green
    const iconMarkerGreen = L.icon({
      iconUrl: '/img/icons/marker-green.svg',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    });

    const openModal = (id) => {
      if (type === 'progressivity') {
        dispatch(setOpenModalGraphic());
        dispatch(setModalGraphic(id));
      }

      if (type === 'proposal') {
        dispatch(setOpenModalProposal());
        dispatch(setModalProposal(id));
      }
    }

    const mapProps = {
      style: {height: '100%'},
      center: position,
      zoom: 2,
      scrollWheelZoom: false,
    }

    switch(type) {
      case 'progressivity':
        return (
          <MapContainer {...mapProps}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
            {countries && countries?.map(({ id, attributes }) => {
              const position = [attributes?.lat, attributes?.lng]
    
              if(attributes.lat && attributes.lng) {
                return (
                  <Marker 
                    key={id} 
                    position={position}
                    className={styles.marker}
                    icon={iconMarker}
                    eventHandlers={{
                      click: () => {
                        openModal(id)
                      }
                    }}
                  >
                  </Marker>
                )
              }
            })}
          </MapContainer>
        )

      case 'proposal':
        return (
          <MapContainer {...mapProps}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
            {countries && countries?.map(({ id, attributes }) => {
              const position = [attributes?.lat, attributes?.lng]
    
              if(attributes.lat && attributes.lng) {
                return (
                  <Marker 
                    key={id} 
                    position={position}
                    className={styles.marker}
                    icon={attributes.isApproved ? iconMarkerGreen : iconMarkerYellow}
                    eventHandlers={{
                      click: () => {
                        openModal(id)
                      }
                    }}
                  >
                  </Marker>
                )
              }
            })}
          </MapContainer>
        )

      case 'tax-havens':
        return (
          <MapContainer {...mapProps}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
            {countries && countries?.map(({ id, attributes }) => {
              const position = [attributes?.lat, attributes?.lng]
    
              if(attributes.lat && attributes.lng) {
                return (
                  <Marker 
                    key={id} 
                    position={position}
                    className={styles.marker}
                    icon={iconMarker}
                  >
                  </Marker>
                )
              }
            })}
          </MapContainer>
        )
    }
  } else {
    return <div>Loading...</div>
  }
}

export default MyMap
