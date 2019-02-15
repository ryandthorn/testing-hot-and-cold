import React from 'react';
import { shallow, mount } from 'enzyme';
import StatusSection from '../status-section';

describe('<StatusSection />', () => {
  const guessArray = [1, 2, 3];

  it('should render without crashing', () => {
    shallow(<StatusSection guesses={guessArray} />);
  });

  it('should be able to access props guesses and auralStatus', () => {
    const wrapper = mount(<StatusSection guesses={guessArray} auralStatus="test" />);
    const props = wrapper.props();
    expect(props.guesses).toEqual(guessArray);
    expect(props.auralStatus).toEqual('test');
  });
});