import React from 'react';
import { shallow } from 'enzyme';
import InfoSection from '../info-section';

describe('<InfoSection />', () => {
  it('should render without crashing', () => {
    shallow(<InfoSection />);
  });

  it('should render information section', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.find('h2').text()).toEqual('What do I do?');
  });
});