'use strict';

import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

var {
  Component,
} = React;

var {
  StyleSheet,
  View,
  requireNativeComponent,
} = ReactNative;

export default class ChatInput extends Component {

  constructor(props) {
    super(props);
    this._onSendText = this._onSendText.bind(this);
    this._onSendVideo = this._onSendVideo.bind(this);
    this._onSendVoice = this._onSendVoice.bind(this);
    this._onShowKeyboard = this._onShowKeyboard.bind(this);
    this._onFeatureView = this._onFeatureView.bind(this);
    this._onPhotoClick = this._onPhotoClick.bind(this);
    this._onEditTextChange = this._onEditTextChange.bind(this);
  }

  _onSendText(event: Event) {
    if (!this.props.onSendText) {
      return;
    }
    this.props.onSendText(event.nativeEvent.text,event.nativeEvent.ids);
  }

  _onSendVideo(event: Event) {
    if (!this.props.onSendVideo) {
      return;
    }
    this.props.onSendVideo(event.nativeEvent.mediaPath);
  }

  _onSendVoice(event: Event) {
    if (!this.props.onSendVoice) {
      return;
    }
    this.props.onSendVoice(event.nativeEvent.mediaPath, event.nativeEvent.duration);
  }

  _onShowKeyboard(event:Event) {
    if (!this.props.onShowKeyboard) {
      return;
    }
    this.props.onShowKeyboard(event.nativeEvent.inputHeight,event.nativeEvent.showType);
  }
  _onFeatureView(event:Event) {
      if (!this.props.onFeatureView) {
        return;
      }
      this.props.onFeatureView(event.nativeEvent.inputHeight,event.nativeEvent.showType);
  }
  _onPhotoClick(event:Event) {
    if (!this.props.onPhotoClick) {
      return;
    }
    this.props.onPhotoClick()
  }
  _onEditTextChange(event: Event) {
    if (!this.props.onEditTextChange) {
      return;
    }
    this.props.onEditTextChange(event.nativeEvent.text);
  }

  render() {
    return (
      <RCTChatInput
          {...this.props}
          onSendText={this._onSendText}
          onSendVideo={this._onSendVideo}
          onSendVoice={this._onSendVoice}
          onShowKeyboard={this._onShowKeyboard}
          onFeatureView={this._onFeatureView}
          onPhotoClick={this._onPhotoClick}
          onEditTextChange={this._onEditTextChange}
      />
    );
  }

}

ChatInput.propTypes = {
  menuContainerHeight: PropTypes.number,
  isDismissMenuContainer: PropTypes.bool,
  onSendVideo: PropTypes.func,
  onSendVoice: PropTypes.func,
  onShowKeyboard: PropTypes.func,
  onFeatureView: PropTypes.func,
  onEditTextChange: PropTypes.func,
  ...View.propTypes
};

var RCTChatInput = requireNativeComponent('RCTChatInput', ChatInput);
