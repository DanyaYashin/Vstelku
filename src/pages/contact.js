import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "./contact.module.css"

export default function Contact() {
  return (
    <Layout>
    <div className={styles.contact_css}>
      <div className={styles.phone}><p>телефон</p></div>
    <p>00000000000</p>
      <div className={styles.phone}><p>Город</p></div>
    <p>Улица дом</p>
    <p>***@gmail.com</p>
    </div>
    </Layout>
  )
}
