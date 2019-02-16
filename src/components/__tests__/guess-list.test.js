import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessList from '../guess-list';

describe('<GuessList />', () => {
  const guessArray = [1, 2, 3];

  it('should render without crashing', () => {
    shallow(<GuessList guesses={guessArray} />);
  });

  it('should have access to prop guesses', () => {
    const wrapper = mount(<GuessList guesses={guessArray} />);
    const props = wrapper.props();
    expect(props.guesses).toEqual(guessArray);
  });

  it('should generate one li element containing the value of each guess', () => {
    const wrapper = mount(<GuessList guesses={guessArray} />);
    const ul = wrapper.find('ul');
    expect(ul.children().length).toEqual(3);
    expect(ul.childAt(0).text()).toEqual('1');
  });
});