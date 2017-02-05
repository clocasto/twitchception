/* globals describe it */
import React from 'react';
import { expect } from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line

describe('Example', () => {
  it('Example', () => {
    const wrapper = shallow(<div />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
