import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import style from "../styles/404.module.css"
import yoni from "../images/Yoni.jpg"

const NotFoundPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.edges.splice(0, 6)
  return (
    <Layout>
      <SEO title="🚫 404 not found" description="page was not found : (" />
      <div
        className="d-flex flex-column"
        style={{
          WebkitBoxFlex: "initial",
          flexGrow: "initial",
          margin: "0 auto",
        }}
      >
        <div className={style.parent}>
          <div className={style.found}>
            <h2>404</h2>
            <p>Page not found</p>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div style={{}}>
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                width: "100%",
                color: "var(--color-text-primary)",
                textAlign: "center",
                borderBottom: "1px solid var(--color-border)",
                textTransform: "uppercase",
              }}
            >
              recent posts
            </p>
            <ol>
              {posts.map(res => {
                return (
                  <div className={style.parentpost}>
                    <div className={style.post} key={res.node.title}>
                      <Link
                        style={{ color: "var(--color-text-primary)" }}
                        to={`/blog/${res.node.slug}`}
                      >
                        <h2>{res.node.title}</h2>
                        <div>
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "32px",
                              height: "32px",
                            }}
                            src={yoni}
                            alt=""
                          />
                          <p>Yoni Kosiner</p>
                          <p>{res.node.publishedDate}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
