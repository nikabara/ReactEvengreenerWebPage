import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DarkVariantExample } from './Components/RunnerText'
import { Navbar } from './Components/Navigation'
import { Dropdown } from './Components/Dropdown'

const EventStatement = (props) => {
  return (
    <>
    <div className="event-div">
      <h6 className="event-text">{props.eventStatement}</h6>
    </div>
    </>
  )
}

const App = () => {
  return(
    <>
      <DarkVariantExample />
      <Navbar maxAmm = {30} message = {"You have reached max capacity"}/>
      <EventStatement eventStatement = {"Every November We Plant 1 Tree Per Order 🌳"}/>
      <Dropdown 
        tabTitle="Shop by Brand" listtext_n1="some rnd text" listtext_n2="some rnd text" 
        listtext_n3="some rnd text" listtext_n4="some rnd text" listtext_n5="some rnd text" 
        listtext_n6="some rnd text" listtext_n7="some rnd text" listtext_n8="" 
        listtext_n9="" listtext_n10="" listtext_n11="" 
        listtext_n12="some rnd text" listtext_n13="some rnd text" listtext_n14="some rnd text" 
        listtext_n15="some rnd text" listtext_n16="some rnd text" listtext_n17="some rnd text" 
        listtext_n18="some rnd text" listtext_n19="" listtext_n20="" 
        listtext_n21=" " listtext_n22=" "
        backgroundImageUrl="../Images/ShopByBrand.webp" paragraphText="EXPLORE OUT PRODUCT RANGES" titleText="Top Quality Brands"
        btnTitle='SHOP BY BRANDS' link12='https://evengreener.com/'>
      </Dropdown>
    </>
  )
}

export default App
