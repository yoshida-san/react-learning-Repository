import React from 'react'
import Sample from '../components/sample/Sample'
import s from './start.scss'

class Start extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={s.wrap}>
        <h1>Start Learning, {this.props.message}!!</h1>
        <Sample />
      </div>
    )
  }

}

export default Start
