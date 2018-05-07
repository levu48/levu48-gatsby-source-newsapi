import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class HeadlinesPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <ul>
        {this.props.data.allNewsFeedItem.edges.map(({node}) => {
            return <li><img src={node.urlToImage} width='150' /><a href={node.id}>{node.title}</a></li>;
        })}
        </ul>
      </div>
    );
  }
}

export default HeadlinesPage;

export const HeadlinesQuery2 = graphql`
  query HeadlinesQuery2 {
    allNewsFeedItem {
      edges {
        node {
          id
          title
          description
          url
          urlToImage
        }
      }
    }
  }
`;