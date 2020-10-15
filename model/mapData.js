const Images = [
    { image: require('../assets/banners/chooks.jpeg') },
     { image: require('../assets/banners/potato.jpg') },
     { image: require('../assets/banners/jollibee.jpg') },
 
     { image: require('../assets/banners/greenwich.jpg') },
 ];
 
 export const markers = [
     {
         coordinate: {
             latitude: 14.065193,
             longitude: 121.326984,
         },
         title: "Chooks to Go",
         description: "Masarap kahit walang sauce!",
         image: Images[0].image,
         rating: 4,
         reviews: 99,
     },
     {
         coordinate: {
             latitude: 14.073827,
             longitude: 121.326151,
         },
         title: "Potato Corner",
         description: "Get Some!",
         image: Images[1].image,
         rating: 3,
         reviews: 121,
     },
     {
         coordinate: {
             latitude: 14.071076,
             longitude: 121.324850,
         },
         title: "Jollibee",
         description: "Bida ang saya",
         image: Images[2].image,
         rating: 5,
         reviews: 327,
     },
     {
         coordinate: {
             latitude: 14.068287,
             longitude: 121.325923,
         },
         title: "Greenwich",
         description: "Fun, Fresh & Addicting",
         image: Images[3].image,
         rating: 3,
         reviews: 121,
     },
 ]
 
 export const mapDarkStyle = [
     {
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#242f3e"
         }
       ]
     },
     {
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#746855"
         }
       ]
     },
     {
       "elementType": "labels.text.stroke",
       "stylers": [
         {
           "color": "#242f3e"
         }
       ]
     },
     {
       "featureType": "administrative.locality",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#d59563"
         }
       ]
     },
     {
       "featureType": "poi",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#d59563"
         }
       ]
     },
     {
       "featureType": "poi.park",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#263c3f"
         }
       ]
     },
     {
       "featureType": "poi.park",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#6b9a76"
         }
       ]
     },
     {
       "featureType": "road",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#38414e"
         }
       ]
     },
     {
       "featureType": "road",
       "elementType": "geometry.stroke",
       "stylers": [
         {
           "color": "#212a37"
         }
       ]
     },
     {
       "featureType": "road",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#9ca5b3"
         }
       ]
     },
     {
       "featureType": "road.highway",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#746855"
         }
       ]
     },
     {
       "featureType": "road.highway",
       "elementType": "geometry.stroke",
       "stylers": [
         {
           "color": "#1f2835"
         }
       ]
     },
     {
       "featureType": "road.highway",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#f3d19c"
         }
       ]
     },
     {
       "featureType": "transit",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#2f3948"
         }
       ]
     },
     {
       "featureType": "transit.station",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#d59563"
         }
       ]
     },
     {
       "featureType": "water",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#17263c"
         }
       ]
     },
     {
       "featureType": "water",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#515c6d"
         }
       ]
     },
     {
       "featureType": "water",
       "elementType": "labels.text.stroke",
       "stylers": [
         {
           "color": "#17263c"
         }
       ]
     }
   ]
 
 export const mapStandardStyle = [
     {
         "elementType": "labels.icon",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
 ];