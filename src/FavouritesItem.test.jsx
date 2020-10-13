import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import renderer from 'react-test-renderer';
import { FavouritesItem } from './FavouritesItem';

enzyme.configure({ adapter: new Adapter() });

describe('Тест компонента избранной вакансии', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      id: '3a591fde-815f-45e7-81e9-9781de9596a5',
      title: 'Applikasjonsutvikler med erfaring søkes til Stingray Marine Solutions',
      url: 'https://jobs.github.com/positions/3a591fde-815f-45e7-81e9-9781de9596a5',
      delFavourites: jest.fn(),
    };

    component = mount(<FavouritesItem key={props.id} {...props} />);
  });

  it('Проверка на render компонента', () => {
    expect(component).toBeTruthy();
  });

  it('Проверка пришли ли пропсы', () => {
    expect(component.props()).toEqual(props);
  });

  it('Проверка текста заголовка', () => {
    const title = component.find('.favourites-item__title');
    expect(title.text()).toEqual(props.title);
  });

  it('render FavouriteItem', () => {
    const tree = renderer
      .create(<FavouritesItem key={props.id} {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('нажатие кнопки del', () => {
    component.find('button').simulate('click');
    expect(component.props().delFavourites.mock.calls.length).toBe(1);
  });
});
