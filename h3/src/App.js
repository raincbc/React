import React from 'react';
import Album from './components/task1/albums1';
import Album2 from './components/task1/albums2';
import { WithData } from './components/task1/context';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Album/>
        <Album2 />
        <WithData/>
      </div>
    )
  }
}
