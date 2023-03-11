import { StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-paper';
import React from 'react'
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View style={styles.container}>
        <View style={styles.mapContainer}>
            <MapView followsUserLocation={true} showsUserLocation={true} style={styles.map} />
        </View>
        <View style={styles.header}>
            <View style={styles.pedometer}>
                <Text variant="titleLarge">Distância percorrida</Text>
                <Divider/>
            </View>  
            <View>
                <Text variant="headlineSmall"> 15 km</Text>
                
            </View>
            <View style={styles.pedometer}>
                <Text variant="titleLarge">Detalhes</Text>
                <Divider/>
            </View>  
        </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        overflow:"hidden"
    },
    header:{
        flex:1,
        overflow:"hidden",
        padding:20
    },
    mapContainer:{
        flex:1,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        shadowColor: 'black',
        shadowOffset: {width: -10, height: -10},
        shadowOpacity: 1,
        shadowRadius: 20,
        overflow:"hidden",
        
    },
    map:{
        width:"100%",
        height:"100%",
         borderRadius:10,
         
    },
    pedometer:{
        flex:"row",
        marginTop:7
    }
})