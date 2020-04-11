import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.scss'
import TourList from './components/TourList'
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <TourList></TourList>
      </>
    )
  }
}

