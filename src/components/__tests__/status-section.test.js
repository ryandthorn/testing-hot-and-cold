import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from '../status-section';

describe('<StatusSection />', () => {
  it('should render without crashing', () => {
    const guessArray = [1, 2, 3];
    shallow(<StatusSection guesses={guessArray} />);
  });
});