import{formatCurrency} from '../scripts/utils/money.js';

describe('test suite:formatCurrency',()=>{
  it('converts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
   

  })
  it('does round off',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');

  })
  it('work with zero',()=>{
    expect(formatCurrency(0)).toEqual('0.00');

  })


});