import React from 'react'
import { SampleContainer } from '../../containers/sampleContainer'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import s from './sample.scss'

export default class Sample extends React.Component {
  render() {
    return (
      <>
        <h2>
          use <label className={s.un}>unstated-next</label> and{' '}
          <label className={s.bs}>React Bootstrap</label>
        </h2>
        <SampleContainer.Provider>
          <div className={s.buttonGroup}>
            <this.alertMessage />
            <this.changeMessage />
            <this.resetMessage />
          </div>
          <this.showMessage />
        </SampleContainer.Provider>
      </>
    )
  }

  showMessage() {
    const sampleContainer = SampleContainer.useContainer()
    return (
      <Alert variant="secondary">
        SampleContainer.message: {sampleContainer.message}
      </Alert>
    )
  }

  changeMessage() {
    const sampleContainer = SampleContainer.useContainer()
    const onClick = () => {
      sampleContainer.change('changed message.')
    }
    return (
      <Button variant="primary" onClick={onClick}>
        change
      </Button>
    )
  }

  resetMessage() {
    const sampleContainer = SampleContainer.useContainer()
    const onClick = () => {
      sampleContainer.reset()
    }
    return (
      <Button variant="danger" onClick={onClick}>
        reset
      </Button>
    )
  }

  alertMessage() {
    const sampleContainer = SampleContainer.useContainer()
    const onClick = () => {
      // eslint-disable-next-line no-undef
      alert(sampleContainer.message)
    }
    return (
      <Button variant="warning" onClick={onClick}>
        alert
      </Button>
    )
  }
}
