import { createHistory, useBasename } from 'history'
import fromPath from 'path-to-regexp'

let history
const toPath = {}

export default function Router({
  basename = '/',
  routes = [],
  bus,
} = {}) {
  if ( ! Router.installed ) {
    throw new Error(
      'Please install the Router with Vue.use() before creating an instance.'
    )
  }

  if ( typeof bus !== 'object' ) {
    throw new Error(
      'Please provide an event bus as the `bus` option'
    )
  }

  history = useBasename( createHistory )({
    basename,
  })

  history.listen( location => {
    bus.$emit( 'historychange', matchRoutes( location, routes ) )
  })

  // match initial route
  const initial = matchRoutes( history.getCurrentLocation(), routes )
  history.start = _ => bus.$emit( 'historychange', initial )

  return history
}

export function href({ name, params }) {
  return toPath[name](params)
}

Router.install = function install( Vue ) {
  function click( event ) {
    event.preventDefault()

    history.push({
      pathname: normalisePathname( event.currentTarget.pathname ),
    })
  }

  function setHref( el, route ) {
    el.setAttribute( 'href', href(route) )
  }

  Vue.directive( 'href', {
    bind( el, { value } ) {
      setHref( el, value )
      el.addEventListener( 'click', click )
    },

    unbind( el ) {
      el.removeEventListener( 'click', click )
    },

    update( el, { value } ) {
      setHref( el, value )
    },
  })
}

function matchRoutes( { pathname }, routes ) {
  const matched = {
    name: null,
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
      matched.params[key.name] = decodeURIComponent( match[index++] )
    }
  }

  return matched
}

function normalisePathname( pathname ) {
  return pathname[0] === '/' ? pathname : '/' + pathname
}
