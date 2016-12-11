import React from 'react';
import { shallow } from 'enzyme';
import { ReduxProvider as Provider } from '../Containers';

it('renders without crashing', () => {
  shallow(<Provider />);
});
