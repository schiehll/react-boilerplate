import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import lazyWithPreload from 'utils/lazyWithPreload'
import Loader from 'components/loader'

export const PATHS = {
  HOME: '/',
  NO_MATCH: '*'
}

const screens = preval`
  const fs = require('fs')
  const path = require('path')
  module.exports = fs.readdirSync(path.resolve(__dirname, '../screens'))
`

export const screenRoutes = screens.reduce((screenRoutes, screen) => {
  const Screen = lazyWithPreload(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

  const path = PATHS[screen.replace(/-/, '_').toUpperCase()]

  if (!path) return screenRoutes

  return screenRoutes.concat({
    screen,
    path,
    component: Screen
  })
}, [])

const Routes = () => (
  <Suspense maxDuration={500} fallback={<Loader />}>
    <Router>
      {screenRoutes.map(({ screen, path, component: Screen }) => {
        return <Screen key={screen} path={path} default={path === '*'} />
      })}
    </Router>
  </Suspense>
)

export default Routes
