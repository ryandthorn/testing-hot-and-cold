import React from 'react';
import { shallow } from 'enzyme';
import GuessList from '../guess-list';

describe('<GuessList />', () => {
  it('should render without crashing', () => {
    const guessArray = [1, 2, 3];
    shallow(<GuessList guesses={guessArray} />);
  });
});