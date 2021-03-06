import React, { Component, StyleSheet, View, Text, Image } from 'react-native';
import Button from 'react-native-button';
import {Layout, Button as ButtonStyles, Common} from './../styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators as RetrospectiveActionCreators} from './../../features/Retrospective';
import upVote from './assets/arrow-up.png';
import downVote from './assets/arrow-down.png';

export class IdeaVote extends Component {
  render() {
    const {
      id,
      text,
      username,
      actions:{
        vote
        }
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Button style={styles.vote} onPress={vote.bind(this, username, id, 1)}><Image style={styles.image}
                                                                            source={upVote} /></Button>
        <Button style={styles.vote} onPress={vote.bind(this, username, id, -1)}><Image style={styles.image}
                                                                             source={downVote} /></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    flex: 3,
    fontSize: 24,
  },
  image: {
    padding: 7,
    borderRadius: 24,
    height: 48,
    width: 48,
    backgroundColor: Common.Palette.voneRed,
    marginLeft: 13
  }
});

const mapStateToProps = state => ({
  username: state.getIn(['Security', 'user', 'username'])
});
const mapActionsToProps = dispatch => ({
  actions: {
    vote: bindActionCreators(RetrospectiveActionCreators.vote, dispatch)
  }
});

export default connect(mapStateToProps, mapActionsToProps)(IdeaVote);
