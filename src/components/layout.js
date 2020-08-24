import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import Header from "./header"


export default function Layout(props) {
  return (
    <div>
    <div className={layoutStyles.topmenu}>
    <Header headerText={props.header} />
    <Link to = '/'><p>Home</p></Link>
    <Link to = '/menu/'><p>Menu</p></Link>
    </div>
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    </div>
  )
}
