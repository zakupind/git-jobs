import enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { FavouritesList } from './FavouritesList';

enzyme.configure({ adapter: new Adapter() });

describe('Тест компонента листа избранных вакансий', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      favouritesList: {
        id1:
      {
        id: 'id1',
        title: 'title1',
        url: 'url1',
      },
        id2:
      {
        id: 'id2',
        title: 'title2',
        url: 'url2',
      },
      },
    };

    component = shallow(<FavouritesList {...props} />);
  });

  test('Проверка на render компонента', () => {
    expect(component).toBeTruthy();
  });

  test('render FavouriteList', () => {
    expect(component).toMatchSnapshot();
  });
});
