import React from 'react';
import { shallow, mount } from 'enzyme';
import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {
  it('should render without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('should have access to prop auralStatus', () => {
    const wrapper = mount(<AuralStatus auralStatus={'test'} />)
    const props = wrapper.props();
    expect(props.auralStatus).toEqual('test');
  });

  it('should update text with auralStatus prop', () => {
    const wrapper = mount(<AuralStatus auralStatus={'test'} />)
    expect(wrapper.text()).toEqual('test');
  });
});