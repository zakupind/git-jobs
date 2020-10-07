import Vacancy from './Vacancy';
import renderer from 'react-test-renderer';
import React from 'react';

it("рендер компонента одной вакансии", () => {
  const TextInputComponent = renderer.create(<Vacancy />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});