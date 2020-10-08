import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import {FavouritesItem} from './FavouritesItem';

enzyme.configure({adapter: new Adapter()});

describe('Тест компонента избранной вакансии', () => {
  let component, props;

  beforeEach(() => {
    props = {
      id: '3a591fde-815f-45e7-81e9-9781de9596a5',
      title: 'Applikasjonsutvikler med erfaring søkes til Stingray Marine Solutions',
      url: 'https://jobs.github.com/positions/3a591fde-815f-45e7-81e9-9781de9596a5',
      delFavourite: jest.fn(),
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
});
