import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./menu.module.css"



const Cocktail = props => (
<div className = {styles.cocktail_img}>
  <div className={styles.block}>
  <div className = {styles.menu_title_css}> {props.title}</div>
  <img src = {props.image} className = {styles.menu_img_css}/>
  <div className = {styles.menu_text_css}> {props.description}</div>
  </div>
</div>
)

export default function Menu() {
  return (
    <Layout header="Menu">

    <Cocktail
      title="Пиво"
      image="https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      description ="Просто лучший напиток."
    />

    <Cocktail
      title="Отвертка"
      image="https://images.unsplash.com/photo-1581244249824-b8a5ca5285cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      description ="Следует отметить, что убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки форм воздействия."
    />



    </Layout>
  )
}
