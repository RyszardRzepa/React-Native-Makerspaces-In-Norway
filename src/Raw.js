import React, {
    Component,
} from 'react';

import {
    LayoutAnimation,
    View,
} from 'react-native';

import FoldView from 'react-native-foldview';

import InfoCard from './components/foldingDetails/InfoCard';
import PhotoCard from './components/foldingDetails/PhotoCard';
import ProfileCard from './components/foldingDetails/ProfileCard';

export default class Row extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            height: 180
        };
    }

    componentWillMount() {
        this.flip = this.flip.bind(this);
        this.handleAnimationStart = this.handleAnimationStart.bind(this);
        this.renderFrontface = this.renderFrontface.bind(this);
        this.renderBackface = this.renderBackface.bind(this);

        setTimeout(() => {
            this.flip();
        }, 300)
    }


    flip() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }


    handleAnimationStart(duration, height) {
        const isExpanding = this.state.expanded;

        const animationConfig = {
            duration,
            update: {
                type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.height,
            },
        };

        LayoutAnimation.configureNext(animationConfig);

        this.setState({
            height,
        });
    }

    renderFrontface() {
        return (
            <InfoCard data={this.props.data} onPress={this.flip} />
        );
    }

    renderBackface() {
        return (
            <ProfileCard data={this.props.data} onPress={this.flip} />
        );
    }

    render() {
        const { height } = this.state;
        const { zIndex } = this.props;

        return (
            <View
                style={{
          height,
          zIndex,
          margin: 10,

        }}
            >
                <FoldView
                    expanded={this.state.expanded}
                    onAnimatationStart={this.handleAnimationStart}
                    perspective={1000}
                    renderBackface={this.renderBackface}
                    renderFrontface={this.renderFrontface}
                >
                    <PhotoCard coordinates={this.props.coordinates} data={this.props.data} onPress={this.flip} />
                </FoldView>
            </View>
        );
    }
}