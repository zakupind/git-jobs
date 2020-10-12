import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import renderer from 'react-test-renderer';
import { FavouritesList } from './FavouritesList';

enzyme.configure({ adapter: new Adapter() });

describe('Тест компонента листа избранных вакансий', () => {
  let component, props;

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

  test('Проверка пришли ли пропсы', () => {
    console.log(component.props());
    expect(component.props().favouritesList).toBe(props.favouritesList.id1);
  });

//   test('render FavouriteList', () => {
//     const tree = renderer
//       .create(<FavouritesList props />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
});
