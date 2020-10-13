import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { VacancyList } from './Vacancylist';

Enzyme.configure({ adapter: new Adapter() });

describe('Тест листа вакансий', () => {
let component, props;

  beforeEach(() => {
    props = {
      isFetching: false,
      statusSearch: 'Текст статуса',
      jobs: [{
        id: 'aaa7101b-6d63-4887-9e0c-1f2989c3cb36',
        type: 'Full Time',
        url: 'https://jobs.github.com/positions/aaa7101b-6d63-4887-9e0c-1f2989c3cb36',
        created_at: 'Thu Oct 08 20:48:37 UTC 2020',
        company: 'Redbrick',
        company_url: 'https://rdbrck.com/',
        location: 'Victoria, BC, Canada',
        title: 'Senior Application Developer',
        description: '<p>Redbrick is the parent organization',
        how_to_apply: '<p>Please apply to the job link',
        company_logo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfcf8205463e2bed0526f9ae61be3cd93d70e210/rdbrck-wordmark.png',
      }],
      favouritesList: {},
    };

    component = shallow(<VacancyList {...props} />);
  });

  test('render', () => {
    expect(component.length).toBe(1);
  });

  test('render VacancyList', () => {
    expect(component).toMatchSnapshot();
  });
});
