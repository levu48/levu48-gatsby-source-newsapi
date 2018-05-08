import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import RssCard from '../components/News/RssCard';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 -5px',
  },
  item: {
    margin: '0 5px 10px'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class VietnamNews extends React.Component {
    render() {
        const tilesData = this.props.data.allRssFeedItem.edges;
        return (
            <div style={styles.root}>
                {tilesData.map(({node}) => (
                    <span style={styles.item}><RssCard article={node} /></span>
                ))}
            </div>
        );
    }
}

export default VietnamNews;

export const VietnamNewsQuery = graphql`
    query VietnamNewsQuery {
        allRssFeedItem {
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
`;