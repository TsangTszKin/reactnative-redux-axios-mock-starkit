// tslint:disable:no-empty
import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { List } from '@ant-design/react-native';
import PropTypes from 'prop-types';

const Item = List.Item;
export default class Follow extends React.Component {

  static propTypes = {
    list: PropTypes.array,
  };
  static defaultProps = {
    list: [
      // { avator: '', userName: '', time: '' }
    ]
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: '#f5f5f9', width: '100%' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List>
          {
            this.props.list.map((el, i) => {
              return (
                <Item
                  key={i}
                  style={{ padding: 10 }}
                  thumb={
                    <Image
                      source={el.avator}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 10,
                        borderRadius: 10,
                      }}
                    />
                  }
                  arrow="horizontal">
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: 50,
                    }}>
                    <View style={{}}>
                      <Text style={{ fontSize: 17, color: '#333' }}>{el.userName}</Text>
                      <Text style={{ color: '#808080' }}>关注了你</Text>
                    </View>
                    <Text style={{ color: '#808080' }}>{el.time}</Text>
                  </View>
                </Item>
              )
            })
          }
        </List>
      </ScrollView>
    );
  }
}
