import React, { useEffect, Fragment } from 'react'
import { Link } from '@reach/router'
import { PATHS, screenRoutes } from 'routes'

const homeScreen = screenRoutes.find(
  screenRoute => screenRoute.path === PATHS.HOME
)

const NoMatch = () => {
  useEffect(() => {
    if (homeScreen) homeScreen.component.preload()
  }, [])

  return (
    <Fragment>
      <h1>No Match</h1>
      <Link to={PATHS.HOME}>home</Link>
    </Fragment>
  )
}

export default NoMatch
