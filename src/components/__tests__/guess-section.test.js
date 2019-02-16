import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessSection from '../guess-section';

describe('<GuessSection />', () => {
  it('should render without crashing', () => {
    shallow(<GuessSection />);
  });

  it('should be able to access props feedback and guessCount', () => {
    const message = 'test';
    const guessCount = 1;
    const wrapper = mount(<GuessSection feedback={message} guessCount={guessCount} />);
    const props = wrapper.props();
    expect(props.feedback).toEqual(message);
    expect(props.guessCount).toEqual(guessCount);
  });
});