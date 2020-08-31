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

    <Cocktail
      title="Креольский"
      image="https://hi-chef.ru/cropping/thumbnails/26/8827/1000x1000/"
      description ="Родом из Нового Орлеана, как и наша концепция — крепкая, интересная и таинственная."
    />

    <Cocktail
      title="Кузнечик"
      image="https://recipes.av.ru//media/recipes/100570_picture_vc1O3Ut.jpg"
      description ="Веселый и забавный, сладкий и мягкий. Для тех кто боится зомби и вампиров."
    />

    <Cocktail
      title="Маргарита"
      image="https://cs11.pikabu.ru/post_img/big/2018/10/28/11/1540754147147216153.jpg"
      description ="Известная леди в узких и не очень кругах. Вроде бы ничего особенного, но как знаменита и утончена.."
    />

    <Cocktail
      title="Похоронный"
      image="https://disgustingmen.com/wp-content/uploads/2020/05/7-963x1024.jpg"
      description ="Если вы понимаете толк в Сухом Мартини, то этот могильщик точно для вас."
    />

    <Cocktail
      title="Дайкири"
      image="https://cs10.pikabu.ru/post_img/big/2018/10/27/7/1540640966151182528.jpg"
      description ="Хемингуэй, с его spiritual experience, плохого не посоветует."
    />

    <Cocktail
      title="Печенька"
      image="https://i1.wp.com/cdn.maximonline.ru/03/04/b1/0304b15414fecb9a1fd4bd3c535d2a9c/659x989_1_4fadbc99b24d87542b1dac25e6820d0f@659x989_0xac120005_12255947351529039421.jpg"
      description ="Этот ЭггНог очаровывает своей текстурой и сложным вкусом, десерт которых мало"
    />


    </Layout>
  )
}
