const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Copyright from '../index.jsx';

describe('components.copyright', () => {
  it('should contain a copyright message with a link to the creator', () => {
    const el = shallow(<Copyright />);
    const creator = el.find('a').at(0);
    expect(creator.text()).to.be.equal('Damir Vazgird');
    expect(creator.prop('href')).to.be.equal('http://damirvazgird.com');
  });
});
