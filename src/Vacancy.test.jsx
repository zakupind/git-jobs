import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { unmountComponentAtNode } from 'react-dom';
import { Vacancy } from './Vacancy';

enzyme.configure({adapter: new Adapter()});

describe('Тест компонента вакансии', () => {
  let component, props;

  beforeEach(() => {
    props = {
      title: 'Site Reliability Engineer',
      url: 'https://jobs.github.com/positions/9511ee69-6ab5-4a98-86cf-d29d1fb2ff83',
      created_at: 'Tue Aug 04 16:21:07 UTC 2020',
      company: 'Sticker Mule',
      company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3FIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65d9aab4ef72c61e9d66a644f2a61ee29ee71924/herman%206.jpg',
      company_url: 'https://www.stickermule.com/careers',
      location: 'Anywhere',
      description: 'Sticker Mule is the Internets most "kick ass" brand. We are privately-owned, profitable',
      isFavourite: false,
      id: '9511ee69-6ab5-4a98-86cf-d29d1fb2ff83',
      addFavourites: () => {},
    };

    component = mount(<Vacancy {...props} />);
  });

  // afterEach(() => {
  //   unmountComponentAtNode(component);
  //   component.remove();
  //   component = null;
  // });

  it('Проверка на render компонента', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    expect(component.props()).toEqual(props);
  });

  it('Проверка текста заголовка', () => {
    const title = component.find('.vacancy__title');
    expect(title.text()).toEqual(props.title);
  });

  it('Проверка текста описания', () => {
    const title = component.find('.vacancy__description');
    expect(title.text()).toEqual(props.description);
  });

  it('Проверка текста названия комании', () => {
    const title = component.find('.vacancy__company_name');
    expect(title.text()).toEqual(props.company);
  });
});
