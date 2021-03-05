import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("App", () => {
 it("renders correctly", () => {
   shallow(<App />);
 });
});

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
