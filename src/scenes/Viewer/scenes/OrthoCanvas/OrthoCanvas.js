import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Canvas } from 'react-three-fiber';

export default class OrthoCanvas extends Component {
    static propTypes = {
        invalidateFrameloop: PropTypes.bool
    }

    render() {
        return (
            <Canvas
                orthographic
                camera={{ position: [0, 0, 10], zoom: 60 }}
                invalidateFrameloop={this.props.invalidateFrameloop}
            >
                <ambientLight color="lightblue" />
                {this.props.children}
            </Canvas>
        )
    }
}