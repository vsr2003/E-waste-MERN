import React, { useEffect, useState, useRef, useContext } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import { AppContext } from '../Context/AppContext';
import { useLocation } from 'react-router-dom';
import treasureMapImg from '../assets/treasureMap.png';

import {motion} from 'framer-motion';

const MapComponent = () => {

    const mapElement = useRef();
    const [map, setMap] = useState({});
    const [userPosition, setUserPosition] = useState(null);

    const locationObject = useLocation();
    const currLoc = locationObject.pathname ;

    const[isMyLocationClicked,setIsMyLocationClicked] = useState(false);
    

    const {setEwasteCenters} = useContext(AppContext);
    
    const initMap = async () => {
        if (currLoc === "/submit") {

                        navigator.geolocation.getCurrentPosition(position => {

                        const { latitude, longitude } = position.coords;

                        setUserPosition([longitude, latitude]);

                        const mapInstance = tt.map({
                            key: "xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS",
                            container: mapElement.current,
                            center: [longitude, latitude], // Set the center to user's location
                            zoom: 15
                        });

                        const marker = new tt.Marker({ color: 'red' })
                    .setLngLat([longitude, latitude])
                    .addTo(mapInstance);

                        
                        mapInstance.addControl(new tt.NavigationControl());
                        mapInstance.addControl(new tt.FullscreenControl());
                        setMap(mapInstance);
                        // const userMarker = new tt.Marker({ color: 'red' }).setLngLat([longitude, latitude]).addTo(map);
                    }, error => {
                        console.error('Error getting user location:', error);
                        // Fallback to a default location if user's location can't be retrieved
                        const mapInstance = tt.map({
                            key: "xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS",
                            container: mapElement.current,
                            center: [-74.006, 40.7128], // Default to New York City coordinates
                            zoom: 12
                        });

                mapInstance.addControl(new tt.NavigationControl());
                mapInstance.addControl(new tt.FullscreenControl());
                setMap(mapInstance);
            });
        }
        else {
            // If the current route is not "/submit", initialize the map without setting the user's position
            const mapInstance = tt.map({
                key: "xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS",
                container: mapElement.current,
                zoom: 15
            });

            mapInstance.addControl(new tt.NavigationControl());
            mapInstance.addControl(new tt.FullscreenControl());
            setMap(mapInstance);
        }
    };

    useEffect(() => {

        initMap();

        // return () => map.remove();
    }, []);

    useEffect(() => {
        setEwasteCenters([]);
    },[locationObject]);

    const showUserPosition = () => {

        
        
        setIsMyLocationClicked(true);

        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setUserPosition([longitude, latitude]);
            map.setCenter([longitude, latitude]);
            const userMarker = new tt.Marker({ color: 'red' }).setLngLat([longitude, latitude]).addTo(map);
        });
    };

    const showEwasteCenters = async () => {
        try {

            if (!userPosition) return;
            const apiKey = 'xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS';
            const response = await fetch(`https://api.tomtom.com/search/2/poiSearch/e-waste.json?key=${apiKey}&lat=${userPosition[1]}&lon=${userPosition[0]}`);
            const data = await response.json();
            const centerResults = data.results;

            console.log(centerResults);
            
            const newMarkers = centerResults.map(center => ({
                coordinates: [center.position.lon, center.position.lat],
                name: center.poi.name,
                address: center.address.freeformAddress,
                id: center.id ,
            }));

            // console.log(newMarkers);

            setEwasteCenters(newMarkers);
    
            // Create bounds object to contain all markers including user's position
            const bounds = new tt.LngLatBounds();
            bounds.extend(userPosition);
    
            newMarkers.forEach(marker => {
                bounds.extend(marker.coordinates);
                const ewasteMarker = new tt.Marker({ color: 'green' }).setLngLat(marker.coordinates).addTo(map);
                const popupContent = `<div><h3>${marker.name}</h3><p>${marker.address}</p></div>`;
                ewasteMarker.setPopup(new tt.Popup({ offset: 30 }).setHTML(popupContent));
                ewasteMarker.on('click', () => {
                    ewasteMarker.togglePopup();
                });
            });
    
            // Fit the map to the bounds with padding
            map.fitBounds(bounds, { padding: 50 });
    
        } catch (error) {
            console.error('Error fetching e-waste centers:', error);
        }
    };
    

return (
    
        <div className=' w-full md:w-[60%] h-auto '>

            <motion.div
                initial={{x:-50}}
                whileInView={{x:0}}
                transition={{duration:1, delay:.1, ease:"easeIn" }}
                ref={mapElement} className="mapDiv w-full h-[70vh] relative rounded-xl shadow-xl ">

                {
                    currLoc === "/" && 

                    <div className={`absolute h-full w-full  z-[999] flex justify-center items-center bg-treasureMap bg-no-repeat bg-center bg-cover ${isMyLocationClicked ? "hidden" : "block"} `}
                        // style={{"backgroundImage" : "url('../assets/treasureMap.png')"}}
                    >
                        <button onClick={showUserPosition} className=" bg-blue-500 hover:bg-blue-700  text-white font-semibold py-1 px-4 rounded ">
                            Show My Position
                        </button>
                    </div>
                }

            </motion.div>

            {/* {
                isMyLocationClicked ? 

                <motion.div
                initial={{x:-50}}
                whileInView={{x:0}}
                transition={{duration:1, delay:.1, ease:"easeIn" }}
                ref={mapElement} className="mapDiv w-full h-[70vh] relative rounded-xl shadow-xl ">

                {
                    // currLoc === "/" && 

                    // <div className={`absolute h-full w-full  z-[999] flex justify-center items-center bg-treasureMap bg-no-repeat bg-center bg-cover ${isMyLocationClicked ? "hidden" : "block"} `}
                    //     // style={{"backgroundImage" : "url('../assets/treasureMap.png')"}}
                    // >
                    //     <button onClick={showUserPosition} className=" bg-blue-500 hover:bg-blue-700  text-white font-semibold py-1 px-4 rounded ">
                    //         Show My Position
                    //     </button>
                    // </div>
                }

                </motion.div>
                :
                <div className=" relative w-full h-[70vh] rounded-xl shadow-xl ">
                    <img src={treasureMapImg} alt=""
                        className=' h-full w-full object-cover '
                    />
                    <button onClick={showUserPosition} className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-500 hover:bg-blue-700  text-white font-semibold py-1 px-4 rounded ">
                            Show My Position
                    </button>
                </div>
            } */}

            <div className="flex justify-center gap-10 mt-4">

                <button onClick={showUserPosition} className={` bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded ${ (currLoc==="/" || currLoc==="/submit") ? "hidden" : "block" } `} >
                    Show My Position
                </button>

                <button onClick={showEwasteCenters} className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-4 rounded">
                    Nearby E-waste Centers
                </button>

            </div>

        </div>
);
};

export default MapComponent;
