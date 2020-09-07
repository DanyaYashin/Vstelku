import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./kitchen.module.css"

const Dishes = props => (
<div className = {styles.salads}>
  <li>{props.text}</li>
  <img src = {props.image} className = {styles.kitchen_img_css}/>
</div>
)

export default function Kitchen() {
  return (
    <Layout header="Кухня">
    <div className = {styles.dishes}>
      <div className = {styles.kitchen_title_css}>Закуски</div>
      <div className = {styles.kitchen_list_css}>
      <ul>
          <li>
          <Dishes
            text="Салат из ростков сои"
            image="https://www.gastronom.ru/binfiles/images/00000237/00080628.jpg"
          />
          </li>
          <li>
          <Dishes
            text="Салат из сладких томатов"
            image=""
          />
          </li>
          <li>
          <Dishes
              text="Рубленая говядина с орехами в азиатском стиле"
              image=""
            />
          </li>
          <li>
          <Dishes
            text="Кальмар с грейпфрутом и мандарином"
            image=""
          />
          </li>
          <li>
          <Dishes
            text="Хрустящие баклажаны и сладкий чили"
            image=""
          />
          </li>
          <li>
          <Dishes
            text="Креветки в рисовой бумаге с соусом Том Ям"
            image=""
          />
          </li>
        </ul>

      </div>
    </div>
    </Layout>
  )
}
