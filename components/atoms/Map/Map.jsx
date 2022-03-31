// import GoogleMapReact from 'google-map-react'
// import dynamic from 'next/dynamic'
// import * as React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet-universal'
import styles from './Map.module.scss'
import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css' 
import { useDispatch, useSelector } from 'react-redux'
import { setModalGraphic, setOpenModalGraphic } from 'actions/general'
import Image from 'next/image'
// import { Map, Marker } from 'mapbox-gl';
// import L from 'leaflet';
// const { MapContainer, TileLayer, Marker, Popup } = dynamic(() => import("react-leaflet"), { ssr: false })

// console.log('myumap', MyMap)

// center: new google.maps.LatLng(8.7129179, -50.3440224), 
// zoom: 2,
// function createMapOptions(maps)  {
//   return {
  //     panControl: false,
  //     mapTypeControl: false,
  //     scrollwheel: false,
  //     styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#495b80"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#95abd0"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#b3becc"},{"weight":0.5}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1473f7"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#7e90b0"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#57647a"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#95abd1"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#879abc"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#eaeaf2"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#ebeef6"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#edeef3"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#e3e4ef"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#dae1ee"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b8d7ee"}]},{"featureType":"water","elementType":"labels.text.fill"}]
  //   }
  // }
  // console.log('pepe', MapContainer)

  

const MyMap = () => {
  const { countries } = useSelector(state => state.country)
  const [map, setMap] = useState(null);
  const [icon, setIcon] = useState(null);
  const dispatch = useDispatch()
  // const refMap = useRef(null)
    
  useEffect(() => {
    const data = require('react-leaflet')
    setMap(data);
  
  },[])

  useEffect(() => {
    const L = require('leaflet')
    setIcon(L);
  }, [])

  // console.log('WINDOW', window)
  const position = [-1.416097, -25.616672]
  // return (
  //   <GoogleMapReact
  //     bootstrapURLKeys={{ key: 'AIzaSyD5EUw-75FjinwfmGsg5OjUXMilJZAlrvc' }}
  //     defaultCenter={defaultCenter}
  //     defaultZoom={defaultZoom}
  //     options={createMapOptions}
  //   >
  //     {children}
  //   </GoogleMapReact>
  // )

  // useEffect(() => {
  //   const map = new Map({
  //     container: refMap?.current, // container ID
  //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 1 // starting zoom
  //   });

  //   const marker = new Marker()
  //     .setLngLat([30.5, 50.5])
  //     .addTo(map);
  // }) 

  // return (
  //   <div className={styles.map} ref={refMap}>

  //   </div>
  // )

  // console.log('map', map)
  if (map) {
    const { MapContainer, TileLayer, Marker, Popup } = map;

    // const iconPerson = L.Icon.extend({
    //   options: {
    //     iconUrl: '/img/icons/mail.svg',
    //     // iconUrl: require('../img/marker-pin-person.svg'),
    //     // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    //     iconAnchor: null,
    //     popupAnchor: null,
    //     shadowUrl: null,
    //     shadowSize: null,
    //     shadowAnchor: null,
    //     iconSize: new L.Point(60, 75),
    //     className: 'leaflet-div-icon'
    //   }
    // });

    const iconMarker = L.icon({
      iconUrl: '/img/icons/marker-red.svg',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    });

    const openModal = (id) => {
      dispatch(setOpenModalGraphic());
      dispatch(setModalGraphic(id));
    }

    return (

      <MapContainer style={{height: '100%'}} center={position} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>

      
      // <MapContainer  zoom={13}>
      //   <TileLayer
      //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //   />
      // </MapContainer>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default MyMap
