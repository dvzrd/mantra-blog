const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Logo from '../index.jsx';

describe('components.logo', () => {
  it('should contain a logo that links to root', () => {
    const el = shallow(<Logo />);
    const logo = el.find('a').at(0);
    expect(logo.text()).to.be.equal('Logo');
    expect(logo.prop('href')).to.be.equal('/');
  });
});
