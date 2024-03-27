import React from 'react'
import Buttons from './Buttons'

const Buttonlist = () => {
  return (
    <div className='flex'>
      <Buttons name="All" />
      <Buttons name="movies" />
      <Buttons name="Ambani wedding" />
      <Buttons name="trending" />
      <Buttons name="Cricket" />
      <Buttons name="Technology" />
      <Buttons name="tamil" />
      <Buttons name="Cute reels" />
      <Buttons name="playing" />
      <Buttons name="drama" />
      <Buttons name="Website" />
      <Buttons name="todays news" />
    </div>
  )
}

export default Buttonlist
