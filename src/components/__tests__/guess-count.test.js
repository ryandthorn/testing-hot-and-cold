import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessCount from '../guess-count';

describe('<GuessCount />', () => {
  it('should render without crashing', () => {
    shallow(<GuessCount />);
  });

  it('should have access to prop guessCount', () => {
    const guessCount = 1;
    const wrapper = mount(<GuessCount guessCount={guessCount} />);
    const props = wrapper.props();
    expect(props.guessCount).toEqual(guessCount);
  });

  it('should pluralize the word "guess" based on guessCount prop', () => {
    let guessCount = 1;
    let wrapper = mount(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual("You've made 1 guess!");

    guessCount = 2;
    wrapper = mount(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual("You've made 2 guesses!");
  });
});