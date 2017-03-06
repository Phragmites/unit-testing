/**
 * @description 按钮button组件的测试用例
 * 本demo用于基本组件的测试用例
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect ,assert } from 'chai';

import Button from '../../src/components/common/Button';


describe('<Button />组件测试内容：', function () {
	it('Button isDefined', () => {
	    assert.isDefined(Button,'button has been defined')
	});
	it('测试button组件', function () {
		const obj = {
			class:"name",
			value:3333,
			text:"button name",
			click:function(){
				console.log('按钮的方法')
			}
		}
		const wrapper = shallow(<Button  {...obj} />)
		expect(wrapper.find(".name")).to.have.length(1);
		expect(wrapper.text()).to.equal("button name");
		wrapper.simulate("click");
    });
});

