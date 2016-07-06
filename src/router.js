import { createHistory, useBasename } from 'history'
import fromPath from 'path-to-regexp'

let history
const toPath = {}

export default function Router({
  basename = '/',
  routes = [],
  app,
} = {}) {
  if ( ! Router.installed ) {
    throw new Error(
      'Please install the Router with Vue.use() before creating an instance.'
    )
  }

  if ( typeof app !== 'function' ) {
    throw new Error(
      'Please provide a Vue instance factory as the `app` option'
    )
  }

  history = useBasename( createHistory )({
    basename,
  })

  history.listen( location => {
    history.app.$broadcast( 'historychange', matchRoutes( location, routes ) )
  })

  matchRoutes( history.getCurrentLocation(), routes )  // set up global state

  history.app = app()
  return history
}

Router.install = function install( Vue ) {
  Vue.directive( 'href', {
    bind() {
      this.el.addEventListener( 'click', this.click )
    },

    unbind() {
      this.el.removeEventListener( 'click', this.click )
    },

    click( event ) {
      event.preventDefault()

      history.push({
        pathname: normalisePathname( event.currentTarget.pathname ),
      })
    },

    update ({ name, params }) {
      const el = this.el
      const href = toPath[name]( params )

      this.el.setAttribute( 'href', href )
    },
  })
}

function matchRoutes( { pathname }, routes ) {
  const matched = {
    name: '',
    params: {},
  }

  for ( const { name, path } of routes ) {
    const keys = []
    const match = fromPath( path, keys ).exec( '/' + pathname )
    toPath[name] = toPath[name] || fromPath.compile( path )

    if ( (!match) || (!match.every(Boolean)) ) continue

    matched.name = name

    let index = 1
    for ( const key of keys ) {
      matched.params[key.name] = match[index++]
    }
  }

  if ( ! matched.name ) return null
  return matched
}

function normalisePathname( pathname ) {
  return pathname[0] === '/' ? pathname : '/' + pathname
}
