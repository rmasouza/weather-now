import React from 'react';
import {mount} from 'enzyme';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Button from './Button';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('<Button />', () => {
    it('should render correctly without crash', async () => {
        act(() => {
            render(<Button onCLick={()=>{}}/>, container);
        });
    });

    it('should render correctly and run click', () => {
        let postMessage: string = '';
        const wrapper = mount(<Button onCLick={() => {
            postMessage = 'done!';
        }}/>);
        wrapper.find('button').simulate('click');
        expect(postMessage).toBe('done!');
    });
});
