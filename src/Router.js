import React, { useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Category from "./pages/Category"
import CategoryDetail from "./pages/CategoryDetail"
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
    const [userSession, setUserSession] = React.useState();
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user)
        })
    }, [])
    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpPage" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
    const otherStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="CategoryPage" component={Category} options={{ title: "Odalar",headerTitleAlign: "center", }} />
                <Stack.Screen name="CategoryDetailPage" component={CategoryDetail} options={{
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <Icon name="logout" style={{ fontSize: 23 }} onPress={() => auth().signOut()} />
                    ), title: "test", headerShown: true
                }} />
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                    !userSession ? <Stack.Screen name="AuthStack" options={{ headerShown: false }} component={AuthStack} /> : <Stack.Screen name="otherStack" options={{ headerShown: false }} component={otherStack} />
                }
            </Stack.Navigator>
        </NavigationContainer>)
}

export default Router