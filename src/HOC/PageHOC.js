import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    Header,
} from 'react-native/Libraries/NewAppScreen';

const Page = WrapedComponent => class extends React.Component {
    render() {
        const isDarkMode = useColorScheme() === 'dark';

        const backgroundStyle = {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        };
        return (
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>
                    <Header />
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        }}>
                        <WrapedComponent></WrapedComponent>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Page