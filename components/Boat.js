import React from 'react';
import { View, Text ,Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({title, icon_name, image, desc}) => {
    return (
        <View>
            <Icon name={icon_name} size={20} color="#5A5A5A">  <Text>{title}</Text></Icon>
            <Text style={{color:'#5A5A5A'}}>{desc}</Text>
            <Image source= {image}
                   style={{width:450, height: 300, marginBottom: 20}} />
        </View>
    );
}
export default Boat;
