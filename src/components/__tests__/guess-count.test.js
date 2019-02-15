import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from '../guess-count';

describe('<GuessCount />', () => {
  it('should render without crashing', () => {
    shallow(<GuessCount />);
  });
});