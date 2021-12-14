import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, ScrollView, ActivityIndicator, Text, RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import { requestCardList, requestBanner } from '../actions'
import { WhiteSpace, SearchBar } from '@ant-design/react-native';
import Banner from '../components/home/Banner';
import ShareItem from '../components/common/ShareItem';

@connect(
  state => ({
    cardList: state.square.cardList,
    banner: state.square.banner,
    loading: state.square.loading,
  }),
  dispatch => ({
    requestCardList: (...params) => dispatch(requestCardList(...params)),
    requestBanner: (...params) => dispatch(requestBanner(...params)),
  })
)
class Square extends React.Component {

  componentDidMount() {
    this.props.requestBanner()
    this._onRefresh()
  }

  _onRefresh = () => {
    console.log('~~~ 下拉刷新 ~~~')
    this.props.requestCardList('refresh')
  }

  _onEndReached = () => {
    const { dataSource, remoteTotal, localTotal } = this.props.cardList
    if (localTotal <= remoteTotal) {
      console.log('~~~ 上拉加载 ~~~')
      this.props.requestCardList()
    }
  }

  render() {
    const { dataSource, remoteTotal, localTotal } = this.props.cardList
    return (
      <SafeAreaView >
        <FlatList
          ListHeaderComponent={
            <>
              <SearchBar placeholder="搜索商户、美食、地点、用户" />
              <Banner banner={this.props.banner} />
              <WhiteSpace />
            </>}
          data={dataSource}
          renderItem={el => <ShareItem data={el.item} />}
          keyExtractor={item => `${item.id}-${Math.random()}`}
          ListFooterComponent={
            <View>
              {
                localTotal >= remoteTotal ?
                  <View style={{ flexDirection: 'row', color: '#fff', justifyContent: 'center' }}>
                    <Text style={{ color: '#000' }}>~~人家是有底线的~~</Text>
                  </View>
                  :
                  <View style={{ flexDirection: 'row', color: '#fff', justifyContent: 'center' }}>
                    <ActivityIndicator size="small" animating={true} />
                    <Text style={{ color: '#000' }}>加载更多...</Text>
                  </View>
              }

            </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              colors={['#ff0000', '#00ff00', '#0000ff']}
              tintColor={'#fff'}
              progressBackgroundColor={"#ffffff"}
              onRefresh={() => {
                this._onRefresh()
              }}
            />
          }
          onEndReached={() => this._onEndReached()}
        />
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