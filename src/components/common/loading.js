
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', color: '#fff', justifyContent: 'center' }}>
        <ActivityIndicator size="small" animating={true} />
      </View>
    );
  }
}
