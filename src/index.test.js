import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    // body of test
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    //(jsdom.env) if to run js files, place the list of js files starting from 2nd paramenter
    // here the 2nd parameter is a call back function, which is run after JSDOM is completed
    // pulling index.html into memory - makes a virtual DOM in memory
    jsdom.env(index, function(err, window){
      // window referring window in browser
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("wubalubadubdub");
      done();
      // async test involving call back, function(err, window) {}
      // done(); is required to inform the result of expect
      window.close();
    });
  });
});
