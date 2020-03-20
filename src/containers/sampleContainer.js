import { useState } from 'react'
import { createContainer } from 'unstated-next'

const defaultMessage = 'default message.'

const container = () => {
  const [message, setmessage] = useState(defaultMessage)

  const change = newMessage => {
    newMessage === message
      ? // eslint-disable-next-line no-undef
        alert('oops! messege changed :-(')
      : setmessage(newMessage)
  }

  const reset = () => {
    setmessage(defaultMessage)
  }

  return { message, change, reset }
}

export const SampleContainer = createContainer(container)
