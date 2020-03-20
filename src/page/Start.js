import React from 'react'
import PropTypes from 'prop-types'
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

Start.propTypes = {
  message: PropTypes.string,
}

export default Start
