import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Modal, Text, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import ImageViewer from 'react-native-image-zoom-viewer';


function PreivewImage(props) {

    const image = props?.route?.params?.imageData;

    const images = [
        {
            uri: image
        }
    ];

    return (
        <View style={{ backgroundColor:"white" }}>

            <BlueHeader
                heading={"Preview Image"}
            />

            <Image
                source={{ uri: image }}
                style={{ width: screenWidth, height: screenHeight }}
            />
           
            {/* <ImageViewer imageUrls={images}/> */}
           
            

        </View>
    );
}

export default PreivewImage;
