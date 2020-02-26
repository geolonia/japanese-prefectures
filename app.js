( async () => {
  const url = "./japanese-prefectures.svg"
  const res = await fetch( url )

  if ( res.ok ) {
    const svg = await res.text()
    document.getElementById( 'map' ).innerHTML = svg
    const prefs = document.querySelectorAll('#map .prefecture')
    prefs.forEach( (pref) => {
      pref.addEventListener( 'mouseover', (event) => {
        event.currentTarget.style.fill = "#ff0000"
      })
      pref.addEventListener( 'mouseleave', (event) => {
        event.currentTarget.style.fill = ""
      })
    } )
  }
} )()
