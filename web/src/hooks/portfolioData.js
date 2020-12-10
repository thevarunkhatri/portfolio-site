import { useStaticQuery, graphql } from "gatsby"


export const usePortfolioData = () => {
    const data = useStaticQuery(graphql`
        query portfolioQuery2 {
            allSanityPortfolioMainItem(sort: {fields: placement, order: ASC}) {
                edges {
                    node {
                        name
                        description
                        tags
                        type
                    }
                }
            }
            allSanityPortfolioExtraItem(sort: {fields: placement, order: ASC}) {
                edges {
                  node {
                    name
                    
                  }
                }
            }
        }       
    `)

    return data;
}

/*

  image {
    asset {
      fluid{
        ...GatsbySanityImageFluid
      }
    }
  }
  
  bannerImage {
    asset {
      fluid {
          ...GatsbySanityImageFluid
      }
    }
  }

*/