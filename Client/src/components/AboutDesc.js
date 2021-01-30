import React from "react"
import styled from "styled-components"
import style from "../styles/about.module.css"

export const AboutDesc = () => {
  return (
    <div className={style.main}>
      <p>
        My name is yoni. I have been fascinated with tech since a very young age
        and I entered the world of coding a little over a year ago over these
        last 17 months I have taught my self
        <div style={{ opacity: "0", cursor: "default" }}>p</div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>MongoDb</li>
          <li>Github</li>
          <li>MySQL</li>
        </ul>
        <br />
        And I have recently started projects for varies clients I look forward
        to herring from you.
      </p>
      <h2 style={{ fontSize: "36px", color: "var(--color-text-secondary)" }}>
        Get In Touch
      </h2>
      <ol>
        <li>
          <strong>🐦</strong>
          <a
            style={{ textDecoration: "underline" }}
            href="https://twitter.com/KosinerYoni"
            target=" _blank"
          >
            Twitter{" "}
          </a>
          - If you have got a quick quesiton or message pleases Tweet{" "}
          <a
            href="https://twiiter.com/KosinerYoni"
            style={{ textDecoration: "underline" }}
            target=" _blank"
          >
            @KosinerYoni{" "}
          </a>
          and I'll get back to you as soon as I can.
        </li>
        <li>
          <strong>📸</strong>
          <a href="https://instagram.com/kosiner.codes" target=" _blank">
            Instagram Dm's{" "}
          </a>
          - I also reply to almost all my Instagram Dm's if you have a quick
          queston and don't want it to be public on twitter feel free to drop me
          a instagram dm.
        </li>
        <li>
          <strong>📨</strong>
          <a
            style={{ textDecoration: "underline" }}
            href="mailto:yoni@kosiner.co.uk"
          >
            Email{" "}
          </a>
          - If it's a longer thing, or you don't want it to be a public tweet,
          please email me (yoni@kosiner.co.uk). I read 100% of emails but
          there's only enough time in the day to reply to some of them tough.
        </li>
      </ol>
    </div>
  )
}
