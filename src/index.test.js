import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test',()=>{
 it('should pass',()=>{
	 expect(true).to.equal(true)
 });
});

describe('index.html',()=>{
	//make sure to make this fucntion async if your doing an async test
	//to do this put done in the perameters 
	it('should say hello',(done)=>{
		const index = fs.readFileSync('./src/index.html',"utf-8");
		jsdom.env(index,function(err,window){
			const h1 =window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("whats good!?");
			//then say that the function is done by calling done
			done();
			window.close();
		})
	})
})
