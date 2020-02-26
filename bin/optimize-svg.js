#!/usr/bin/env node

const path = require( 'path' )
const fs = require( 'fs' )

const text = fs.readFileSync( path.join( __dirname, '../japanese-prefectures.svg' ), 'utf-8' )
console.log( text )
