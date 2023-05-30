import {createStackNavigator} from '@react-navigation/stack';
import ListView from '../screens/ListView';
import UpdateUser from '../screens/UpdateUser';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const routes =  () => {
    return (
        <Stack.Navigator initialRouteName={'Login'}>
             <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ListView" component={ListView} />
            <Stack.Screen name="UpdateUser" component={UpdateUser} />
        </Stack.Navigator>
    );
};
export default routes;
