const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Hero from '../index.jsx';

describe('components.hero', () => {
  it('should contain a hero canvas', () => {
    const el = shallow(<Hero />);
    const hero = el.find('canvas').at(0);
    expect(hero.class()).to.be.equal('hero canvas');
  });
});
