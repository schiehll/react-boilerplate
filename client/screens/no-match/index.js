import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import useScreenPreload from 'hooks/useScreenPreload'
import { PATHS } from 'routes'

const NoMatch = () => {
  useScreenPreload(PATHS.HOME)

  return (
    <Fragment>
      <h1>No Match</h1>
      <Link to={PATHS.HOME}>home</Link>
    </Fragment>
  )
}

export default NoMatch
