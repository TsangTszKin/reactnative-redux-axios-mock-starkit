import React from 'react';
import { Text, View } from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';


import { ScrollView } from 'react-native';
import { Grid } from '@ant-design/react-native';
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}));

export default class BasicCardExample extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Card>
          <Card.Header
            title="This is title"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View >
              <ScrollView>
                <Grid
                  data={data}
                  columnNum={3}
                  itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
                />
              </ScrollView>
            </View>
          </Card.Body>
          <Card.Footer
            content="footer content"
            extra="footer extra content"
          />
        </Card>
      </View>
    );
  }
}