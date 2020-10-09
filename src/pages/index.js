import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./index.module.css"


export default function Home() {
  return (
    <Layout header="Vstelku">

    <span>VSTELKU</span>

    <canvas className={styles.cnvs}></canvas>

    <div className = {styles.news}>
    <div className = {styles.news_border}>
    <div className = {styles.border}>
    Но представители современных социальных резервов ассоциативно распределены по отраслям. Также как базовый вектор развития позволяет выполнить важные задания по разработке приоритизации разума над эмоциями. Как уже неоднократно упомянуто, реплицированные с зарубежных источников, современные исследования обнародованы.

Внезапно, ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Каждый из нас понимает очевидную вещь: начало повседневной работы по формированию позиции обеспечивает актуальность первоочередных требований!
    </div>
    </div>
    </div>

    <div className = {styles.home_img}>
    <img src ="https://clubbable.blob.core.windows.net/medias/Kisa-Bar-?timestamp=636982694579521872" className = {styles.home_img1}/>
    <img src ="https://cf.bstatic.com/images/hotel/max1024x768/238/238873030.jpg" className = {styles.home_img2}/>
    <img src ="https://fastly.4sqi.net/img/general/600x600/38168747_5cQcwEpfouMfTwqoxEsdRtKNItq2IvJR6uncRZeHnVI.jpg" className = {styles.home_img3}/>
    <img src ="https://www.restoclub.ru/uploads/place_thumbnail_big/e/5/a/0/e5a0ed446c048f738f40ffd78a906ed2.jpg" className = {styles.home_img4}/>
    </div>

    </Layout>
  )
}
