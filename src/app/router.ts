import { createBrowserRouter } from 'react-router'
import { AppShell } from './AppShell'
import { HomePage } from './HomePage'
import { NotFoundPage } from './NotFoundPage'
import { LoadingPage, RouteErrorPage } from './RouteStatusPages'

export const router = createBrowserRouter([
  {
    Component: AppShell,
    ErrorBoundary: RouteErrorPage,
    HydrateFallback: LoadingPage,
    children: [
      { index: true, Component: HomePage },
      {
        path: 'projects/:slug',
        lazy: () => import('../features/projects/ProjectRoute'),
      },
      {
        path: 'resume',
        lazy: () => import('../features/resume/ResumeRoute'),
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
