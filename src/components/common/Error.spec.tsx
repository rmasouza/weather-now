import React from 'react';
import {mount} from 'enzyme';
import Error from './Error';
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


describe('<Error />', () => {
    it('should render correctly without crash', async () => {
        act(() => {
            render(<Error message={'error :('} action={()=>{}}/>, container);
        });
    });

    it('should render correctly with right props', () => {
        let postMessage: string = '';
        const wrapper = mount(<Error message={'error :('} action={() => {
            postMessage = 'done!';
        }}/>);
        expect(wrapper.find(Error).first().props().message).toBe('error :(');
        wrapper.find(Button).simulate('click');
        expect(postMessage).toBe('done!');
    });
});
