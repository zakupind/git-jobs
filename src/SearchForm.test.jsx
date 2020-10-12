import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Search } from './SearchForm';

enzyme.configure({ adapter: new Adapter() });

describe('тест формы поиска', () => {
  let props;
  let component;

  describe('общие тесты', () => {
    beforeEach(() => {
      props = {
        searchSubmit: () => {},
        searchNull: () => {},
      };

      component = mount(<Search {...props} />);
    });

    test('snapshot search', () => {
      const tree = renderer
        .create(<Search {...props} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ввод данных', () => {
    props = {
      searchSubmit: () => {},
      searchNull: () => {},
    };

    component = mount(<Search {...props} />);

    test('input description test', () => {
      const description = component.find('input').at(0);
      description.simulate('change',
        { target: { value: 'python' } });

      expect(component.state('description')).toEqual('python');
    });

    test('input location test', () => {
      const location = component.find('input').at(1);
      location.simulate('change',
        { target: { value: 'new-york' } });

      expect(component.state('location')).toEqual('new-york');
    });

    test('input fullTime click', () => {
      const fullTime = component.find('input').at(2);
      fullTime.simulate('click');

      expect(component.state('fullTime')).toEqual(true);
    });

    // test('button click', () => {
    //   const submit = component.find('button');
    //   submit.simulate('click');

    //   expect(searchSubmit)
    // });
  });
});
