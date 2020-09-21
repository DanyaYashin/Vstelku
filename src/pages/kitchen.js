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
  <div className={styles.text_kitchen2}>{props.text2}</div>
  <img src = {props.image2} className = {styles.kitchen_img_css2}/>
</div>
)

export default function Kitchen() {
  return (
    <Layout header="Кухня">
    <div className = {styles.all_dishes}>
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
              image="https://i.ytimg.com/vi/lPzWwDxNzyg/maxresdefault.jpg"
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
            text2="Сингапурский суп с лапшой и морскими гадами"
            image2="https://cs13.pikabu.ru/post_img/2020/01/29/5/og_og_1580277910285653883.jpg"
          />
          </li>
          <li>
          <Dishes2
            text2="Новоорлеанский Гамбо"
            image2="https://ic.pics.livejournal.com/svart_ulfr/8996341/134604/134604_900.jpg"
          />
          </li>
          <li>
          <Dishes2
            text2="Суп чечевичный с домашними копченостями"
            image2="https://www.povarenok.ru/data/cache/2019feb/07/28/2484407_67740-710x550x.jpg"
          />
          </li>
          <li>
          <Dishes2
            text2="Китайский куриный суп"
            image2="https://www.gastronom.ru/binfiles/images/20150319/ba4afe12.jpg"
          />
          </li>
          </ul>
      </div>
    </div>





    <div className = {styles.dishes}>
      <div className = {styles.kitchen_title_css}>Горячее</div>
      <div className = {styles.kitchen_list_css}>
      <ul>
          <li>
          <Dishes
            text="Пшеничная лапша с куриными бедрами и овощами"
            image="https://img1.russianfood.com/dycontent/images_upl/286/big_285520.jpg"
          />
          </li>
          <li>
          <Dishes
            text="Курица гунбао с рисом"
            image="https://static.1000.menu/img/content/36983/kurica-gunbao_1564026798_1_max.jpg"
          />
          </li>
          <li>
          <Dishes
              text="Свиная грудинка с кокосовым рисом и хрустящим луком"
              image="https://www.gotovim.ru/pics/sbs/svininpapriklavr/rec.jpg"
            />
          </li>
          <li>
          <Dishes
            text="Овощи в пряном соусе с тофу и кинзой"
            image="https://eda.ru/img/eda/c550x246i/s2.eda.ru/StaticContent/Photos/120131090259/121018212013/p_O.jpg"
          />
          </li>
        </ul>

      </div>
    </div>
    </div>

    </Layout>
  )
}
