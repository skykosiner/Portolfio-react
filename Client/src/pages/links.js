import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import yoni from "../images/Yoni.jpg"
import style from "../styles/link.module.css"

const Link = () => {
  return (
    <Layout>
      <SEO title="🔗 Links" />
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 style={{ color: "var(--color-text-secondary)", fontSize: "55px" }}>
          Links
        </h1>
        {/* Image of me */}
        <img
          className="rounded-circle"
          style={{ width: "16rem" }}
          src={yoni}
          alt="portrait of me"
        />
        {/* Buttons for links */}
        <div className={style.link}>
          <a className="ml-3" href="/">
            Portfolio
          </a>
          <div className={style.break}></div>
          <a
            className="ml-3"
            href="https://github.com/yonikosiner"
            target=" _blank"
          >
            Github
          </a>
          <div className={style.break}></div>
          <a className="ml-3" href="https://twitter.com/KosinerYoni">
            Twitter
          </a>
          <div className={style.break}></div>
          <a
            className="ml-3"
            href="https://instagram.com/kosiner.codes"
            target=" _blank"
          >
            Instagram
          </a>
          <div className={style.break}></div>
          <a
            className="ml-3"
            href="https://www.amazon.co.uk/ideas/amzn1.account.AE776VQXIKLTI2XBAB7CH3SQQ5UA/34G6U3M0OB380?ref=idea_cp_vl_ov_d"
            target=" _blank"
          >
            Amazon
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Link
