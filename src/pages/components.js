import React from 'react'
import Link from 'gatsby-link'

import Button from '../components/button'
import Bar from '../components/bar'
import Breadcrumb from '../components/breadcrumb'
import Carousel from '../components/carousel'
import HeroImage from '../components/heroImage'
import NavBar from '../components/NavBar'

const ComponentsDemo = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Button>Default</Button>
      <Button dark>Dark</Button>
      <Button opaque>Opaque</Button>
      <h1>Bar</h1>
      <Bar />
      <h1>Breadcrumb</h1>
      <Breadcrumb dark crumbs={[{name: 'a', link: '/components#a'}, {name: 'b', link: '/components#b'}, {name: 'c', link: '/components#c'}, {name: 'd', link: '/components#d'}, {name: 'e', link: '/components#e'}, {name: 'f', link: '/components#f'}]} />
      <h1>Carousel</h1>
      <Carousel images={['/cdn/images/digicahA.PNG', '/cdn/images/digicahB.PNG', '/cdn/images/digicahC.PNG']} />
    </div>
  )
}

export default ComponentsDemo
