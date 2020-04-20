const maps = [ "../map-circle.svg", "../map-full.svg", "../map-mobile.svg" ]
const containers = document.querySelectorAll( '.map' )

maps.forEach( async ( map, index ) => {
  const res = await fetch( map )

  if ( res.ok ) {
    const svg = await res.text()
    containers[ index ].innerHTML = svg
    const prefs = document.querySelectorAll( '.geolonia-svg-map .prefecture' )

    prefs.forEach( ( pref ) => {
      pref.addEventListener( 'mouseover', ( event ) => {
        event.currentTarget.style.fill = "#ff0000"
      } )
      pref.addEventListener( 'mouseleave', ( event ) => {
        event.currentTarget.style.fill = ""
      } )
    } )
  }
} )
