import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import ProductHeader from "../components/ProductHeader";

describe('Chats Component', () => {
    it('h5',()=>{
        const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);
        var h5 = ReactTestUtils.findRenderedDOMComponentWithTag(component,'h5');
    })
    it('className',()=>{
        const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'chatName');
    })
})