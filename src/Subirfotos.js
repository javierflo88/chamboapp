import React, { Component } from 'react';
import firebase from 'firebase';

class Subirfotos extends Component {
  constructor () {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render () {
    return ( 
        <div class="field">
        <br/>
        <div class="file is-centered is-boxed is-success has-name">
          <label class="file-label">
            <input class="file-input" onChange={this.props.onUpload} type="file" name="resume"/>
            <span class="file-cta">
              <span class="file-icon">
                <i class="fa fa-upload"></i>
              </span>
              <span class="file-label">
              Subir CV
              </span>
            </span>
            <span class="file-name">
                       {this.state.uploadValue} % 
            </span>
          </label>
        </div>
        <img width="320" src= {this.state.picture}  alt=""/>
      </div>
      


    )
  }
}

export default Subirfotos;