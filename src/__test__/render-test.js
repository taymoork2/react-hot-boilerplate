import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../routes';

it('renders without crashing', () => {
  shallow(<Routes />);
});
