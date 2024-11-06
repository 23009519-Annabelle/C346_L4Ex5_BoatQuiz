import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ title, icon_name, image, desc, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Icon name={icon_name} size={30} color="black" />
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black',
    },
    desc: {
        fontSize: 14,
        color: 'grey',
    },
});

export default Boat;
