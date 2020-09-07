import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import Header from "./header"


export default function Layout(props) {
  return (
    <div>
    <div className={layoutStyles.topmenu}>
    <ul>
    <li><Header headerText="Vstelku" /></li>
    <li><Link to = '/menu/'><p>Бар</p></Link></li>
    <li><Link to = '/kitchen/'><p>Кухня</p></Link></li>
    <li><Link to = '/'><p>Контакты</p></Link></li>
    </ul>
    </div>
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    </div>
  )
}
