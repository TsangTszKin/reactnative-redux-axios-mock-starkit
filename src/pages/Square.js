import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import { requestCardList } from '../actions/'

@connect(
  state => ({
    cardList: state.square.cardList,
  }),
  dispatch => ({
    requestCardList: (...params) => dispatch(requestCardList(...params))
  })
)
class Square extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                  <FlatList
                    data={DATA}
                    renderItem={({ item }) => 
						<View style={styles.item}>
							<Text style={styles.title}>{item.title}</Text>
						</View>
					}
                    keyExtractor={item => item.id}
                  />
                </SafeAreaView>
        )
    }
}

export default Square

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
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