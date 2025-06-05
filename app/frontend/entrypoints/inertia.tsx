import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

// Temporary type definition, until @inertiajs/react provides one
type ResolvedComponent = {
  default: React.ComponentType
  layout?: (page: React.ComponentType) => React.ComponentType
}

createInertiaApp({
  // Set default page title
  title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  // progress: false,

  resolve: async (name) => {
    const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.tsx')
    const importPage = pages[`../pages/${name}.tsx`]

    if (!importPage) {
      console.error(`Missing Inertia page component: '${name}.tsx'`)
      return null
    }

    const page = await importPage()
    // If you want to use a default layout, uncomment the following line:
    // page.default.layout ||= (page) => page

    return page.default
  },

  setup({ el, App, props }) {
    if (el) {
      const root = createRoot(el)
      root.render(
        <>
          {createElement(App, props)}
          <Toaster richColors />
        </>
      )
    } else {
      console.error(
        'Missing root element.\n\n' +
        'If you see this error, it probably means you load Inertia.js on non-Inertia pages.\n' +
        'Consider moving <%= vite_typescript_tag "inertia" %> to the Inertia-specific layout instead.',
      )
    }
  },
})
