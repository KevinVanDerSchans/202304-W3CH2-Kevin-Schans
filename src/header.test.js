// TESTEANDO UN HEADER


import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom'
import { Header } from "./header";


describe('Given the component Header', () => {

  document.body.innerHTML = '<slot></slot>';
  new Header('slot', 'Test title');
  const element = screen.getByText('Test title');


  describe('When It is instantiate', () => {
    test('It should be in the document', () => {
      
      expect(element).toBeTruthy();
      expect(element).toBeInTheDocument();
    });
  });
});
