import React from 'react';
import ClassNames from 'classnames';
import style from './style';

class Input extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.node,
    floating: React.PropTypes.bool,
    label: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    multiline: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    required: React.PropTypes.bool,
    type: React.PropTypes.string,
    value: React.PropTypes.any
  };

  static defaultProps = {
    className: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    type: 'text',
    seed: 1
  };

  handleChange = (event) => {
    if (this.props.onChange) this.props.onChange(event.target.value, event);
  };

  blur () {
    this.refs.input.blur();
  }

  focus () {
    this.refs.input.focus();
  }

  render () {
    const { children, disabled, error, floating,
            label: labelText, maxLength, multiline, type, value, ...others} = this.props;
    const length = maxLength && value ? value.length : 0;
    const labelClassName = ClassNames(style.label, {[style.fixed]: !floating});

    const className = ClassNames(
      style.root, 
        {
        [style.disabled]: disabled,
        [style.errored]: error,
        [style.hidden]: type === 'hidden',
      }, 
      this.props.className,
      style['background-' + this.props.seed]
    );

    const valuePresent = value !== null && value !== undefined && value !== '' && !Number.isNaN(value);

    const InputElement = React.createElement(multiline ? 'textarea' : 'input', {
      ...others,
      className: ClassNames(style.input, {[style.filled]: valuePresent}),
      onChange: this.handleChange,
      ref: 'input',
      role: 'input',
      disabled,
      type,
      value,
      maxLength
    });

    return (
      <div className={className}>
        {InputElement}
        <div className={style.arrow}><div></div></div>
        {labelText ? <label className={labelClassName}>{labelText}</label> : null}
        {error ? <span className={style.error}>{error}</span> : null}
        {maxLength ? <span className={style.counter}>{length}/{maxLength}</span> : null}
        {children}
      </div>
    );
  }
}

export default Input;