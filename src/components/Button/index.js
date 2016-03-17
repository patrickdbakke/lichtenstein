import React from 'react';
import ClassNames from 'classnames';
import style from './style.scss';

class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    label: React.PropTypes.string,
    onMouseLeave: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    type: React.PropTypes.string
    // accent: React.PropTypes.bool,
    // flat: React.PropTypes.bool,
    // floating: React.PropTypes.bool,
    // inverse: React.PropTypes.bool,
    // mini: React.PropTypes.bool,
    // neutral: React.PropTypes.bool,
    // primary: React.PropTypes.bool,
    // raised: React.PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    // accent: false,
    // flat: false,
    // floating: false,
    // mini: false,
    // neutral: true,
    // primary: false,
    // raised: false
  };

  handleMouseUp = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(event);
  };

  handleMouseLeave = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };

  render () {
    const { accent, children, className, flat, floating, href,
            inverse, label, mini, neutral, primary, raised, ...others} = this.props;
    const element = href ? 'a' : 'button';
    // const level = primary ? 'primary' : accent ? 'accent' : 'neutral';
    // const shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

    const classes = ClassNames('button', className);

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave
    };

    return React.createElement(element, props,
      label,
      children
    );
  }
}

export default Button;