import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Modal, Text, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import ImageViewer from 'react-native-image-zoom-viewer';


function PreivewImage(props) {

    const image = props?.route?.params?.imageData;

    const images = [
        {
            uri: "https://tse2.mm.bing.net/th?id=OIP.XPAe9YDnO-BTbD7ZA4cqwAHaFj&pid=Api&P=0&h=180"
        }
    ];

    return (
        <View style={{ backgroundColor:"white" }}>

            <BlueHeader
                heading={"Preview Image"}
            />

            {/* <Image
                source={image}
                style={{ width: screenWidth, height: screenHeight }}
            /> */}
            <Modal
             visible={true}
            >
            <ImageViewer imageUrls={images}/>
            </Modal>
            

        </View>
    );
}

export default PreivewImage;
