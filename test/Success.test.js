import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect ,assert } from 'chai';

import Success from '../src/components/common/Success';


describe('<Success />', function () {
	it('Success isDefined', () => {
	    assert.isDefined(Success)
	})
	it('测试事件', function () {
		const clickHandle = function(){
			console.log('点击事件触发')
		};
	    const App = shallow(<Success click={clickHandle}/>);
	    App.find('a').simulate('click');
	    // expect(clickHandle.calledOnce).to.equal(true)
	    // expect(App.find('.submit-ico').length).to.equal(1);
    });
    it('App\'s title should be Todos', function () {
	    const App = shallow(<Success />);
	    expect(App.find('.submit-ico').length).to.equal(1);
    });
});

