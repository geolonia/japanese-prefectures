( async () => {
    const url = "./japanese-prefectures.svg"

    const res = await fetch( url )

    if ( res.ok ) {
        const svg = await res.text()
        document.getElementById( 'map' ).innerHTML = svg
        const prefs = document.querySelectorAll('#japanese-prefectures .prefecture')
        prefs.forEach( (pref) => {
            pref.addEventListener( 'mouseover', (event) => {
                // 都道府県単位で色を変えるため親要素にアクセスする必要がある
                document.getElementById(event.target.parentNode.id).style.fill = "#ff0000"
            })
            pref.addEventListener( 'mouseleave', (event) => {
                // mouseleave イベントはカレント要素が対象であることに注意
                document.getElementById(event.target.id).style.fill = "#eeeeee"
            })
        } )
    }
} )()