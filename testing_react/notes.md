# Enzyme

## Methods
`shallow` is for *just* the component you are testing. It does not render children
`mount` is when you want to do testing on lifecycle methods of the component which makes it good for when you want to test any components that are not stateless
`static` is when you want to analyze the actual HTML output of a component and will not be used in this tutorials test

## Wrapper
A common pattern is to use a `wrapper` assignment for the component being tested  
Then we call `find()`,  `props()`, et cetera on the wrapper  
`find()` looks like a jquery selector
```javascript
describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
```

When using `mount` we can use `find()` to select React Components
We can also use `state()` to get the state object
See examples below for usage of `setState` and `simulate('clcik')`

```javascript
describe('<Gravatar />', () => {
  it('contains an <Avatar/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'hello@ifelse.io' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
  });
});
```
