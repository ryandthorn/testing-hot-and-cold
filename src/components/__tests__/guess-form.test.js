import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from '../guess-form';

describe('<GuessForm />', () => {
  it('should render without crashing', () => {
    shallow(<GuessForm />);
  });

  it('should have access to onMakeGuess prop', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const props = wrapper.props();
    expect(props.onMakeGuess).toEqual(callback);
  });

  it('should call its onSubmit method when user submits guess', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const guess = 42;
    wrapper.find('.text').instance().value = guess;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  });

  it('should clear its input field when user submits guess', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const guess = 42;
    wrapper.find('.text').instance().value = guess;
    wrapper.simulate('submit');
    expect(wrapper.find('.text').instance().value).toEqual('');
  });
});