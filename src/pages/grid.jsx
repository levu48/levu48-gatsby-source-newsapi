import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Media,
  MediaOverlay,
} from 'react-md';

const randomImage = () => 'https://cdn.cnn.com/cnnnext/dam/assets/180501151127-winty-singh-child-large-tease.jpg'

const nature = randomImage({ width: 600, height: 337, section: 'nature' });

class WithMedia extends React.Component {

    render() {
        return (
            <div className="md-grid">
                {this.props.data.allNewsFeedItem.edges.map(({node}) => {
                    return (
                        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                            <Media>
                                <img src={node.urlToImage} alt={node.title} />
                                <MediaOverlay>
                                    <CardTitle title={node.title} style={{fontSize: 12}} >
                                        <Button className="md-cell--right" icon>launch</Button>
                                    </CardTitle>
                                </MediaOverlay>
                            </Media>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
export default WithMedia;

export const WithMediaQuery = graphql`
  query WithMediaQuery {
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