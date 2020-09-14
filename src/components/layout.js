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
    <li><Link to = '/contact/'><p>Контакты</p></Link></li>
    </ul>
    </div>
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    <div className={layoutStyles.bottom_page}>
    <ul>
    <li><p>Адрес</p>
    <Link to="/"><p>улица.дом</p></Link></li>
    <li><p>Связь</p>
    <Link to="/"><p>00000000000</p></Link></li>
    <li><p>Режим работы</p>
    <Link to="/"><p>24/7</p></Link></li>
    </ul>
    </div>
    </div>
  )
}
