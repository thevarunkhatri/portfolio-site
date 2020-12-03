import { useStaticQuery, graphql } from "gatsby"


export const usePortfolioData = () => {
    const data = useStaticQuery(graphql`
        query portfolioQuery {
            allSanityPortfolioMainItem(sort: {fields: placement, order: ASC}) {
                edges {
                    node {
                        name
                        description
                        bannerImage {
                            asset {
                                fluid {
                                    ...GatsbySanityImageFluid
                                }
                            }
                        }
                        tags
                        type
                    }
                }
            }
        }       
    `)

    return data;
}