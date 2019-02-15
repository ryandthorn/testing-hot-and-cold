import React from 'react';
import { shallow } from 'enzyme';
import TopNav from '../top-nav';

describe('<TopNav />', () => {
  it('should render without crashing', () => {
    shallow(<TopNav />);
  });
});