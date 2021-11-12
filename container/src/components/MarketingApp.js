import React, { useRef, useEffect } from 'react'
import { mount } from 'marketingService/MarketingApp'

export default () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div ref={ref} id="marketing-app"/>
  )
}


