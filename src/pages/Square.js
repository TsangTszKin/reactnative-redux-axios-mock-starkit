import React from 'react'
import { View, Text } from 'react-native'

class Square extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Square!</Text>
            </View>
        )
    }
}

export default Square