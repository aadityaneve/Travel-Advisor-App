import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
require('dotenv').config();

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery(`(min-width: 600px)`);
    const coordinates = { lat: 0, lon: 0 };

    return (
        <div className={classes.mapContainer}>
            {console.log(process.env.GOOGLE_MAPS_API_KEY)}

            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={""}
                // onChange={""}
                // onChildClick={""}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
