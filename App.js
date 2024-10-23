import React from 'react';
import {StatusBar, ScrollView, Text} from 'react-native';
import Boat from "./components/Boat.js"

const App = () => {
    return (
        <ScrollView>
            <StatusBar hidden={true} />
            <Text style={{color:'#5A5A5A', marginBottom: 20}}>GetABoat - For Sale</Text>
            <Boat title="Sea Ray 500 Sundancer" icon_name="sailboat" image={require("./img/sea_ray.jpg")}  desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."/>
            <Boat title="Four Winns Horizon 180" icon_name="sailboat" image={require("./img/four_winns.jpg")}  desc="A sporty look and refined details truly set the Horizon 180 above all others."/>
            <Boat title="Flipper 640 ST" icon_name="sailboat" image={require("./img/flipper.jpg")} desc="A modern take on the classic, traditional hardtop and perfect for a family picnic." />
            <Boat title="Princess V48" icon_name="sailboat" image={require("./img/princess.jpg")} desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." />
            <Boat title="Bayliner 175 Bowrider" icon_name="sailboat" image={require("./img/bayliner.jpg")} desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance" />
            <Boat title="Fairline Targa 47" icon_name="sailboat" image={require("./img/fairline.jpg")} desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." />
        </ScrollView>
    );
}

export default App;
