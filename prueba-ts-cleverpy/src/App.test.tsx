import Login from './Components/Login';
import UserList from './Components/UserList';
import * as ReactDOM from 'react-dom';
import React from 'react';

describe('Login component tests', () => {

    let container: HTMLDivElement

    beforeEach(() => {
container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Login/>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {

        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);
        expect(inputs[0].name).toBe('email')
        expect(inputs[1].name).toBe('password')
       
        


    })
})

describe('UserList component tests', () => {

    let container: HTMLDivElement

    beforeEach(() => {
container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<UserList/>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {

        const cards = container.querySelectorAll(".card");
        expect(cards).toHaveLength(10);
        
        


    })
})