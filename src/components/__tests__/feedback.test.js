import React from 'react';
import { shallow, mount } from 'enzyme';
import Feedback from '../feedback';

describe('<Feedback />', () => {
  it('should render without crashing', () => {
    shallow(<Feedback />);
  });

  it('should pass props feedback and guessCount', () => {
    const message = 'test';
    const guessCount = 0;
    const wrapper = mount(<Feedback feedback={message} guessCount={guessCount} />);
    const props = wrapper.props();

    expect(props.feedback).toEqual(message);
    expect(props.guessCount).toEqual(guessCount);
  });

  it('should render a prompt to guess again if on any but the first guess', () => {
    const message = 'test';
    const guessCount = 1;
    const wrapper = mount(<Feedback feedback={message} guessCount={guessCount} />);
    const wrapperText = wrapper.text()

    expect(wrapperText).toEqual('test Guess again!')
  });
});