import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./kitchen.module.css"

const Dishes = props => (
<div className = {styles.salads}>
  <div className={styles.text_kitchen}>{props.text}</div>
  <img src = {props.image} className = {styles.kitchen_img_css}/>
</div>
)

const Dishes2 = props => (
<div className = {styles.salads2}>
  <img src = {props.image2} className = {styles.kitchen_img_css2}/>
  <div className={styles.text_kitchen2}>{props.text2}</div>
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
            image="https://p1.zoon.ru/d/f/576b06a057c652a3358b45c6_5773cf71992e6.jpg"
          />
          </li>
          <li>
          <Dishes
              text="Рубленая говядина с орехами в азиатском стиле"
              image="https://lh3.googleusercontent.com/proxy/TErMJQmBCMVH-tpjxTzPLl_uv5H0fNlHK1yw0pXVVXnQb_IJaEcv9mQLqFfb-zqk3U3KRnNQZ1LowKkHuTrrb9DmrrAEYJqXCmg1GDAn_qz93cdQLVNDs4SBhbZclEAsQ1J7_udJZdYbz-35"
            />
          </li>
          <li>
          <Dishes
            text="Кальмар с грейпфрутом и мандарином"
            image="https://aif-s3.aif.ru/images/016/411/005ae6ba4322ca24b7e5063a418dfcfe.jpg"
          />
          </li>
          <li>
          <Dishes
            text="Хрустящие баклажаны и сладкий чили"
            image="https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120213180745/180529180106/p_O.jpg"
          />
          </li>
          <li>
          <Dishes
            text="Креветки в рисовой бумаге с соусом Том Ям"
            image="https://top-kitchen.ru/wp-content/uploads/1-635.gif"
          />
          </li>
        </ul>

      </div>
    </div>


    <div className = {styles.dishes2}>
      <div className = {styles.kitchen_title_css2}>Супы</div>
      <div className = {styles.kitchen_list_css2}>
      <ul>
          <li>
          <Dishes2
            image2="https://cs13.pikabu.ru/post_img/2020/01/29/5/og_og_1580277910285653883.jpg"
            text2="Сингапурский суп с лапшой и морскими гадами"
          />
          </li>
          <li>
          <Dishes2
            text2="Сингапурский суп с лапшой и морскими гадами"
            image2="https://cs13.pikabu.ru/post_img/2020/01/29/5/og_og_1580277910285653883.jpg"
          />
          </li>
          <li>
          <Dishes2
            text2="Сингапурский суп с лапшой и морскими гадами"
            image2="https://cs13.pikabu.ru/post_img/2020/01/29/5/og_og_1580277910285653883.jpg"
          />
          </li>
          <li>
          <Dishes2
            text2="Сингапурский суп с лапшой и морскими гадами"
            image2="https://cs13.pikabu.ru/post_img/2020/01/29/5/og_og_1580277910285653883.jpg"
          />
          </li>
          </ul>
      </div>
    </div>
    </Layout>
  )
}
