// /* eslint-disable react-native/no-inline-styles */
// /*
//  * @Author: your name
//  * @Date: 2019-11-08 16:53:14
//  * @LastEditTime: 2019-11-11 21:53:42
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \hello_world\src\Index.js
//  */
// import React from 'react';
// import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
// import {Carousel} from '@ant-design/react-native';
// import { Carousel } from '@ant-design/react-native';
// import BannerImg from '../../resource/广场banner.jpg';
// import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';

// export default class Banner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   onHorizontalSelectedIndexChange(index) {
//     /* tslint:disable: no-console */
//     // console.log('horizontal change to', index);
//   }

//   render() {
//     return (
//       <Carousel
//         style={styles.wrapper}
//         selectedIndex={0}
//         autoplay
//         infinite
//         afterChange={this.onHorizontalSelectedIndexChange}>
//         <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
//           <Image source={BannerImg} style={styles.img} />
//         </View>
//         <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
//           <Image source={BannerImg2} style={styles.img} />
//         </View>
//       </Carousel>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     backgroundColor: '#fff',
//   },
//   containerHorizontal: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 150,
//   },
//   img: {
//     height: '100%',
//     width: '100%',
//   },
// });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from '@ant-design/react-native';
export default class BasicCarouselExample extends React.Component {
  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }
  onVerticalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
            >
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
            >
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'yellow' },
              ]}
            >
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}
            >
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'fuchsia' },
              ]}
            >
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Text>Carousel will adjust height based on content</Text>
          <Text>{React.Children.count(this.props.children)}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
