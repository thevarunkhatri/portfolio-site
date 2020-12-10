import { useStaticQuery, graphql } from "gatsby"


export const useFooterData = () => {
    const data = useStaticQuery(graphql`
        query blogPostQuery2 {
            allSanityBlogPost(sort: {fields: publishDate, order: DESC}, limit: 3) {
                edges {
                    node {
                        id
                        title
                        description
                        link
                    }
                }
            }
        }           
    `)

    return data;
}