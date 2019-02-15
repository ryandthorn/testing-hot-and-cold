import React from 'react';
import { shallow, mount } from 'enzyme';
import TopNav from '../top-nav';

describe('<TopNav />', () => {
  it('should render without crashing', () => {
    shallow(<TopNav />);
  });

  it('should fire the onRestartGame callback when New Game is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav
      onRestartGame={callback}
    />);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('should fire the onGenerateAuralUpdate callback when hidden link is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav
      onGenerateAuralUpdate={callback}
    />);
    wrapper.find('.status-link').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});