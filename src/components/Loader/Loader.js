import React, { Component } from 'react';
import { Discuss } from 'react-loader-spinner';

export class Loader extends Component {
      render() {
    return (
   <Discuss
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#F4442E"
    />
    );
  }
}