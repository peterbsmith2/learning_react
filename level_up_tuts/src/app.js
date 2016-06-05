import React from 'react';
import {render} from 'react-dom';
import ContactsList from './contactsList';

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: '555 555 5555'
},
{
  id: 2,
  name: 'Peter',
  phone: '555 555 5555'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

render(<App contacts={contacts}/>, document.getElementById('app'));
