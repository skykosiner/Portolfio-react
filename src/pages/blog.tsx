// import React from 'react';
// import Layout from '../components/layout';
// import { Link } from 'gatsby'
// import { graphql, useStaticQuery } from 'gatsby'


// const BlogPage = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark{
//                 edges{
//                     node{
//                         frontmatter{
//                             title
//                             data
//                         } 
//                       fields{
//                         slug
//                       }
//                     }
//                 }
//             }
//         }
//     `)

//     return (
//         <Layout>
//             <h1>Blog</h1>
//             <ol className={blogStyles.posts}>
//                 {data.allMarkdownRemark.edges.map((edge) => {
//                     return (
//                         <li className={blogStyles.post}>
//                             <Link to={`/blog/${edge.node.fields.slug}`}>
//                                 <h2>{edge.node.frontmatter.title}</h2>
//                                 <p>{edge.node.frontmatter.data}</p>
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ol>
//         </Layout>
//     );
// }

// export default BlogPage;