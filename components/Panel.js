import React from 'react';
import { StyleSheet, Dimensions, Button, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default  ({onPressLeft, textLeft, togglePointsFilter, pointsVisible}) => {
    const hideShowText = pointsVisible ? 'Hide Points' : 'Show Points';
    return(
        <View style={styles.panel}>
           <TouchableOpacity style={styles.button} onPress={onPressLeft}>
               <Icon name="bars" type='ant-design' size={16} color='white'/>
                <Text style={styles.buttonText}>{textLeft}</Text>
            </TouchableOpacity>
            <View style={styles.separator}/>
            <TouchableOpacity style={styles.button} onPress={togglePointsFilter}>
                <Icon name={pointsVisible ? 'eye-with-line' : 'eye'} type='entypo' size={16} color='white'/>
                <Text style={styles.buttonText}>{hideShowText}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    separator: {
        width: 10,
    },
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        marginBottom: 5,
        marginHorizontal: 5,
        minWidth: Dimensions.get('window').width / 2 - 50,
        flexDirection : 'row',
    },
    buttonText: {
        marginLeft: 15,
        color: 'white',
    },

});
