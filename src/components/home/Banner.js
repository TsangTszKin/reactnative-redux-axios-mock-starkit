
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Carousel } from '@ant-design/react-native';
import BannerImg from '../../resource/广场banner.jpg';
import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHorizontalSelectedIndexChange(index) {
  }

  render() {
    return (
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay
        infinite
        afterChange={this.onHorizontalSelectedIndexChange}>
        {
          this.props.banner.map((el, i) => <View key={i} style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
            <Image source={el} style={styles.img} />
          </View>)
        }
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    height: 200,
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});