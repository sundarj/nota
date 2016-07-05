import { createHistory, useBasename } from 'history'
import fromPath from 'path-to-regexp'

let History
let Component
const toPath = {}

export default function Router({ basename = '/', routes = [] } = {}) {
  if ( ! Router.installed ) {
    throw new Error(
      'Please install the Router with Vue.use() before creating an instance.'
    )
  }

  if ( ! Component ) {
    throw new Error( 'Please call route( component ) before creating an instance.' )
  }

  History = useBasename( createHistory )({
    basename,
  })

  History.listen( location => {
    onhistorychange( location, routes )
  })
  onhistorychange( History.getCurrentLocation(), routes )

  return History
}

Router.install = function install( Vue ) {
  Vue.directive( 'href', {
    bind() {
      this.el.addEventListener( 'click', event => {
        event.preventDefault()

        History.push({
          pathname: normalisePathname( event.currentTarget.pathname ),
        })
      })
    },

    update ({ name, params }) {
      const el = this.el
      const href = toPath[name]( params )

      this.el.setAttribute( 'href', href )
    },
  })
}

export function route( extComponent ) {
  Component = extComponent

  return extComponent
}


function onhistorychange( location, routes ) {
  Component.$broadcast( 'historychange', matchRoutes( location, routes ) )
}

function matchRoutes( { pathname }, routes ) {
  const matched = {
    name: '',
    params: {},
  }

  for ( const { name, path } of routes ) {
    const keys = []
    const match = fromPath( path, keys ).exec( '/' + pathname )
    toPath[name] = fromPath.compile( path )

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
