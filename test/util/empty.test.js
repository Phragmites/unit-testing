import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import isEmptyObject from '../../src/util/isEmptyObject';

describe('util/isEmptyObject',function(){
	describe('isEmptyObject函数测试', function () {
	  it('函数为空', function() {
	  	expect(isEmptyObject({})).to.be.equal(true)
	  })
	  it('函数不为空', function() {
	  	expect(isEmptyObject({a:2})).to.be.equal(false)
	  })
	  it('不可为数组', function() {
	  	expect(isEmptyObject([1,2,3])).to.be.equal(false)
	  })
	  it('空数组也为true，此处就是一个本函数的局限了', function() {
	  	expect(isEmptyObject([])).to.be.equal(true)
	  })
	})
})