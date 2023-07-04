import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { useTheme } from 'native-base'

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'

import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Exercise } from '@screens/Exercise'
import { Profile } from '@screens/Profile'
import { color } from 'native-base/lib/typescript/theme/styled-system'

type AppRoutes = {
    Home: undefined
    Profile: undefined
    Exercise: undefined
    History: undefined
}

export type AppNavigationRoutesProp = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes(){
    const {sizes, colors} = useTheme()

    const iconSize = sizes[6]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }
            }}>
            <Screen 
                name='Home'
                component={Home}
                options={{
                   tabBarIcon: ({ color }) => (
                    <HomeSvg fill={color} width={iconSize} height={iconSize}/>
                   )
                }}
            />
            <Screen 
                name='History'
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                     <HistorySvg fill={color} width={iconSize} height={iconSize}/>
                    )
                 }}
            />
            <Screen 
                name='Profile'
                component={Profile }
                options={{
                    tabBarIcon: ({ color }) => (
                     <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
                    )
                 }}
            />
            <Screen 
                name='Exercise'
                component={Exercise}
                options={{ tabBarButton: () => null}}
            />

        </Navigator>
    )
}