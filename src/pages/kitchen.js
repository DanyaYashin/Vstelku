import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./kitchen.module.css"



export default function Kitchen() {
  return (
    <Layout header="Кухня">
    <div className = {styles.dishes}>
      <div className = {styles.kitchen_title_css}>Закуски</div>
      <div className = {styles.kitchen_list_css}>
        <ul>
          <li>Салат из ростков сои</li>
          <li>Салат из сладких томатов</li>
          <li>Рубленая говядина с орехами в азиатском стиле</li>
          <li>Кальмар с грейпфрутом и мандарином</li>
          <li>Хрустящие баклажаны и сладкий чили</li>
          <li>Креветки в рисовой бумаге с соусом Том Ям</li>
        </ul>
      </div>
    </div>
    </Layout>
  )
}
