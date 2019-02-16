import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should have access to props onGenerateAuralUpdate and onRestartGame', () => {
    const callback = jest.fn();
    const wrapper = mount(<Header onGenerateAuralUpdate={callback} onRestartGame={callback} />)
    const props = wrapper.props();
    expect(props.onRestartGame).toEqual(callback);
    expect(props.onGenerateAuralUpdate).toEqual(callback);
  });
});