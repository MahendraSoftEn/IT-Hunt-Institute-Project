import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';


 function LoadingModal(props) {

  const [isModalVisible,setIsModalVisible]=useState(false);

  return (
    <View>
        <Modal
        visible={props.isVisible}
        transparent={true}
        >
            <View style={{flex:1,justifyContent:"center",backgroundColor:"rgba(0,0,0,0.5)"}}>
                <View style={{}}>
                   <ActivityIndicator  size="large" color={"white"} /> 
                </View>
            
            </View>

        </Modal>
        
    </View>
  );
}

export default LoadingModal;
