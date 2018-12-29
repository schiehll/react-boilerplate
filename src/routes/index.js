import React from 'react'
import { Router } from '@reach/router'
import ScreenRoute from 'utils/ScreenRoute'

export const PATHS = {
  HOME: '/'
}

const Routes = () => (
  <Router>
    <ScreenRoute key="home" screen="home" path={PATHS.HOME} />
    <ScreenRoute key="no-match" screen="no-match" default />
  </Router>
)

export default Routes
