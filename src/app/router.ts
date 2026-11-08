import { createBrowserRouter } from 'react-router'
import { Home } from '../design/Home'
import { AppShell } from '../design/Shell'
import { LoadingPage, RouteErrorPage } from './RouteStatusPages'

export const router = createBrowserRouter([
  {
    Component: AppShell,
    ErrorBoundary: RouteErrorPage,
    HydrateFallback: LoadingPage,
    children: [
      { index: true, Component: Home },
      {
        path: 'projects/:slug',
        lazy: async () => ({
          Component: (await import('../design/CaseStudy')).CaseStudy,
        }),
      },
      {
        path: 'resume',
        lazy: () => import('../features/resume/ResumeRoute'),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('../design/CaseStudy')).NotFound,
        }),
      },
    ],
  },
])
