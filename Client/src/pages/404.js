import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <div>
      <SEO title="404: Not found" description="page was not found : (" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage
