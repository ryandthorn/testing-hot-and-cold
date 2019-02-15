import React from 'react';
import { shallow } from 'enzyme';
import GuessForm from '../guess-form';

describe('<GuessForm />', () => {
  it('should render without crashing', () => {
    shallow(<GuessForm />);
  });
});