import React from "react";
import { StyleSheet, Dimensions, Button, View , FlatList , Text, TouchableOpacity} from "react-native";

export default ({points, closeModal}) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={points}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item.name}</Text></View>}
                    keyExtractor={item => item.name}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={closeModal}>
                    <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
            </View>
        
        </>
    );
    }

const styles = StyleSheet.create({
   list: {
            height: Dimensions.get("window").height -450,
        },
    item: {
        borderBottomWidth: 1,
        borderColor: "#eee",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: "black",
        borderRadius: 50,
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        marginBottom: 5,
        marginHorizontal: 5,
    },  
    });
    
