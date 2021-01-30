import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

export const Footer = () => {
  return (
    <div
      style={{
        background: "var(--color-card-primary)",
        color: "var(--color-text-primary)",
        borderTop: ".5px solid var(--color-border)",
        padding: "40px 0",
        marginTop: "40px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{ margin: "0 auto", maxWidth: "1140px", padding: "0 16px" }}
        >
          <div
            style={{
              float: "right",
              display: "flex",
              flexDirection: "column",
              marginTop: "-.5rem",
            }}
          >
            <a
              style={{ color: "var(--color-text-primary)" }}
              href="https://twitter.com/KosinerYoni"
              target=" _blank"
            >
              Twitter
            </a>
            <a
              style={{ color: "var(--color-text-primary)" }}
              href="https://instagram.com/kosiner.codes"
              target=" _blank"
            >
              Instagram
            </a>
            <a
              style={{ color: "var(--color-text-primary)" }}
              href="https://github.com/yonikosiner"
              target=" _blank"
            >
              GitHub
            </a>
            <a
              href="mailto:yoni@kosiner.co.uk"
              style={{ color: "var(--color-text-primary)" }}
            >
              Email
            </a>
            <a
              href="https://www.youtube.com/channel/UCceuqcaS7oAGBYMBEhTyDEQ"
              style={{ color: "var(--color-text-primary)" }}
              target=" _blank"
            >
              YouTube
            </a>
          </div>
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "14px",
              letterSpacing: ".5px",
              fontWeight: "500",
              lineHeight: "'22px",
            }}
          >
            <Link to="/" style={{ color: "var(--text-color-primary)" }}>
              yoni kosiner
            </Link>
          </p>
          <p>
            I'm a self taught web developer and blogger. On this site you can read my blog, where I talk about tech, coding and productivity
          </p>
          <div
            style={{
              borderTop: ".5px solid var(--color-border)",
              fontSize: "12px",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} Yoni Kosiner - Published with{" "}
            <a href="https://gatsbyjs.com">Gatsby</a> &{" "}
            <a href="https://www.contentful.com/">Contentful</a>
          </div>
        </div>
      </div>
    </div>
  )
}
