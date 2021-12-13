import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, ScrollView, StatusBar, Button } from 'react-native'
import { connect } from 'react-redux';
import { requestCardList, requestBanner } from '../actions'
import { WhiteSpace, SearchBar } from '@ant-design/react-native';
import Banner from '../components/home/Banner';
import ShareListPannel from '../components/common/ShareListPannel';

@connect(
  state => ({
    cardList: state.square.cardList,
    banner: state.square.banner,
  }),
  dispatch => ({
    requestCardList: (...params) => dispatch(requestCardList(...params)),
    requestBanner: (...params) => dispatch(requestBanner(...params)),
  })
)
class Square extends React.Component {

  componentDidMount() {
    this.props.requestBanner()
  }

  render() {
    console.log('this.props.banner', this.props.banner)
    return (
      <SafeAreaView >

        <ScrollView automaticallyAdjustContentInsets={false}>
          <SearchBar placeholder="搜索商户、美食、地点、用户" />
          {/* <WhiteSpace /> */}
          <Banner banner={this.props.banner} />
          <View style={{ marginTop: 10 }}>
            <ShareListPannel
            // dataList={store.list.getData.dataSource}
            />
          </View>
          {/* <WhiteSpace /> */}
        </ScrollView>
        <Button onPress={() => this.props.requestCardList()} title="mock测试"></Button>
      </SafeAreaView>
    )
  }
}

export default Square

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];