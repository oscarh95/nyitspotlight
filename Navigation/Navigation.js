import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from 'react-native';

function Hello() {
    return (
        <Text>
            Hello Navigation!
        </Text>
    )
}

function Bye() {
    return (
        <Text>
            Bye Navigation!
        </Text>
    )
}

const Drawer = createDrawerNavigator();

function NavigationContents() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Hello" component={Hello} />
            <Drawer.Screen name = "Bye" component={Bye}/>
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavigationContents />
        </NavigationContainer>
    )
}