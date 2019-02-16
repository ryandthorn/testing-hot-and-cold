import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from '../game';

describe('<Game />', () => {
  it('should render without crashing', () => {
    shallow(<Game />);
  });

  it('should set its initial state', () => {
    const defaultState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };

    const wrapper = shallow(<Game />);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  });

  it('should update its state by calling makeGuess', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().makeGuess(50);
    wrapper.update();
    expect(wrapper.state('guesses').length).toEqual(1);
  });

  it('should update its state by calling generateAuralUpdate', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().generateAuralUpdate();
    wrapper.update();
    expect(wrapper.state('auralStatus')).not.toEqual('');
  });
});