# SVG Map of Japan

ウェブサイトの検索インターフェース等で使用することを想定した、SVG フォーマットの日本地図です。都道府県別のリンクを作るなどのユースケースを想定しています。

https://geolonia.github.io/japanese-prefectures/demo/

## 仕様

* 都道府県ごとにグループ化してあり、都道府県名、八地方区分名を `class` 属性の値としてセットしてありますので、CSS で都道府県や地方別に色分けすることができます。
* `data-code` という属性をもっており、都道府県コードが格納されています。（大阪府の例: data-code="27"）
* 誠に申し訳ございませんが、縦横比の都合上、小笠原諸島等の一部の離島は省略してあります。
* 2種類の SVG ファイルがありますので、好みで使い分けてください。
  * [map-full.svg](https://github.com/geolonia/japanese-prefectures/blob/master/map-full.svg) - フルサイズの地図です。
  * [map-mobile.svg](https://github.com/geolonia/japanese-prefectures/blob/master/map-mobile.svg) - モバイルデバイス用にアレンジした地図です。

## 使い方 （例）

### JavaScript

JavaScript で以下のように読み込んでください。

```javascript
const map = "./map-full.svg" // Or "./map-mobile.svg"
const container = document.querySelector( '#map' )

const res = await fetch( map )

if ( res.ok ) {
  const svg = await res.text()
  container.innerHTML = svg
  const prefs = document.querySelectorAll( '.geolonia-svg-map .prefecture' )

  prefs.forEach( ( pref ) => {
    // マウスオーバーで色を変える
    pref.addEventListener( 'mouseover', ( event ) => {
      event.currentTarget.style.fill = "#ff0000"
    } )

    // マウスが離れたら色をもとに戻す
    pref.addEventListener( 'mouseleave', ( event ) => {
      event.currentTarget.style.fill = ""
    } )

    // マウスクリック時のイベント
    pref.addEventListener( 'click', ( event ) => {
      location.href = `https://example.com/${event.currentTarget.dataset.code}` // 例（大阪）: https://example.com/27
    } )
  } )
}
```

### CSS

以下は CSS の記述例です。

```css
.geolonia-svg-map
{
  width: 100%;
}

.geolonia-svg-map .prefecture
{
  fill: #f7f7f7;
  stroke: #666666;
  cursor: pointer;
}

.geolonia-svg-map .boundary-line
{
  stroke: #999999;
}
```

## ライセンス

この SVG データは、Wikipedia の [日本地図.svg](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:%E6%97%A5%E6%9C%AC%E5%9C%B0%E5%9B%B3.svg) をベースにしており、ライセンスは GFDL とします。
