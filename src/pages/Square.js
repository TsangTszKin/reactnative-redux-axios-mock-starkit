/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { requestCardList } from '../actions/index';

@connect(
    state => ({
        cardList: state.square.cardList,
    }),
    dispatch => ({
        requestCardList: (...params) => dispatch(requestCardList(...params))
    })
)
class Square extends React.Component {
    static propTypes = {
        cardList: PropTypes.object.isRequired,
        requestCardList: PropTypes.func.isRequired,
    }
    requestCardList = () => {
        this.props.requestCardList()
    }
    componentDidMount() {
        console.log('requestCardList', requestCardList)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Square!</Text>
                <Text>{this.props.cardList.localTotal}</Text>
                <Button title="获取数据" onPress={this.requestCardList}></Button>
            </View>
        )
    }
}

export default Square