import { useEffect } from 'react'
import { screenRoutes } from 'routes'

const useScreenPreload = routePath => {
  useEffect(() => {
    const screen = screenRoutes.find(
      screenRoute => screenRoute.path === routePath
    )

    if (screen) screen.component.preload()
  }, [])
}

export default useScreenPreload
