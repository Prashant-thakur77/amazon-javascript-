import{formatCurrency} from '../../scripts/utils/money.js'
describe('test suite:format currency',()=>{
  it('coverts cents into dollar',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');

  });

})