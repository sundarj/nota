import { createHistory, useBasename } from 'history'
import fromPath from 'path-to-regexp'

let History
let Component

export default function Router({ basename = '/', routes = [] } = {}) {
  if ( ! Component ) return console.warn( 'Make sure to call route( component ) first' )

  History = useBasename( createHistory )({
    basename,
  })

  History.listen( location => {
    onhistorychange( location, routes )
  })
  onhistorychange( History.getCurrentLocation(), routes )

  return History
}

Router.install = Vue => {
  Vue.directive( 'href', {
    // bind() {
    //   const el = this.el
    //   const expression = JSON.parse( this.expression )
    //   const route = Routes.find( route => route.name === expression.name )
    // },
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
