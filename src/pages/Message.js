/*
 * @Author: your name
 * @Date: 2019-11-13 13:48:13
 * @LastEditTime: 2019-11-20 16:25:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\Message.js
 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import Notice from '../components/message/Notice';
import Follow from '../components/message/Follow';
import { connect } from 'react-redux';
import { requestFollowList, requestNoticeList } from '../actions'
import Loading from '../components/common/loading'

@connect(
  state => ({
    followList: state.message.followList,
    noticeList: state.message.noticeList,
    loading: state.message.loading,
  }),
  dispatch => ({
    requestFollowList: (...params) => dispatch(requestFollowList(...params)),
    requestNoticeList: (...params) => dispatch(requestNoticeList(...params)),
  })
)
class Message extends React.Component {

  componentDidMount() {
    this.props.requestFollowList()
    this.props.requestNoticeList()
  }

  render() {
    const tabs = [{ title: '关注' }, { title: '通知' }];

    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    };
    return (
      <Tabs
        tabs={tabs}
        tabBarActiveTextColor="#000"
        tabBarInactiveTextColor="#808080"
        tabBarBackgroundColor="#FBC464"
        tabBarUnderlineStyle="#FBC464"
        renderUnderline={s => {
          return <View style={{ backgroundColor: '#000' }} />;
        }}>
        <View style={style}>
          {
            this.props.loading ? <Loading /> : <Follow list={this.props.followList} />
          }
        </View>
        <View style={style}>
          {
            this.props.loading ? <Loading /> : <Notice list={this.props.noticeList} />
          }
        </View>
      </Tabs>
    );
  }
}
export default Message