import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MediaCard from '../components/News/MediaCard';
//import translate from 'translate-api';

//export default () => <h2>GridListExampleSimple</h2>;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridListExampleSimple extends React.Component {
    // componentWillMount() {
    //     this.props.data.allNewsFeedItem.edgeds.forEach(async ({node}) => {
    //         node.title = translate.getText(node.title, {to: 'vi-VN'});
    //         node.description = translate.getTExt(node.description, {to: 'vi-VN'});
    //     })
    // }

    render() {
        const tilesData = this.props.data.allNewsFeedItem.edges;
        return (
            <div style={styles.root}>
                {tilesData.map(({node}) => (
                    <MediaCard article={node} />
                ))}
            </div>
        );
    }
}

export default GridListExampleSimple;

export const GridListExampleSimpleQuery = graphql`
    query GridListExampleSimpleQuery {
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