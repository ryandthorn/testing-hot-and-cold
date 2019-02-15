import React from 'react';
import { shallow } from 'enzyme';
import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {
  it('should render without crashing', () => {
    shallow(<AuralStatus />);
  });
});