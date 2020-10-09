// import { shallow, mount } from 'enzyme';
// import enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import React from 'react';
// import { unmountComponentAtNode } from 'react-dom';

// import renderer from 'react-test-renderer';
// import { FavouritesList } from './FavouritesList';

// enzyme.configure({ adapter: new Adapter() });

// describe('Тест компонента листа избранных вакансий', () => {
//   let component, props;

//   beforeEach(() => {
//     props = {
//       favouritesList: {
//         id1:
//       {
//         id: 'id1',
//         title: 'title1',
//         url: 'url1',
//       },
//         id2:
//       {
//         id: 'id2',
//         title: 'title2',
//         url: 'url2',
//       },
//       },
//     }

//     component = shallow(<FavouritesList favouritesList={props} />);
//   });

//   it('Проверка на render компонента', () => {
//     console.log(component.debug());
//     expect(component).toBeTruthy();
//   });

//   it('Проверка пришли ли пропсы', () => {
//     expect(component.props('id1')).toBe(props);
//   });

//   it('проверка отрисовки компонентов', () => {
//     expect(component.find('FavouritesItem')).toHaveLength(2);
//   });

//   it('render FavouriteList', () => {
//     const tree = renderer
//       .create(<FavouritesList props />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
