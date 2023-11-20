import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Modal, Text, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import ImageViewer from 'react-native-image-zoom-viewer';


function PreivewImage(props) {

    const image = props?.route?.params?.imageData;

    const images = [
        {
            url: image
        }
    ];

    return (
        <View style={{ backgroundColor:"white",flex:1 }}>
            <BlueHeader
                heading={"Preview Image"}
            />
           <View style={{flex:1}}>
             <ImageViewer 
             imageUrls={images}
             backgroundColor='white'
             />
           </View>
        </View>
    );
}

export default PreivewImage;
