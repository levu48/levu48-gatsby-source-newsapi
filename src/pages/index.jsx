// import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import MediaCard from '../components/News/MediaCard';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     margin: '0 -5px',
//   },
//   item: {
//     margin: '0 5px 10px'
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: 'auto',
//   },
// };

// /**
//  * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
//  */
// class Home extends React.Component {
//     render() {
//         const tilesData = this.props.data.allNewsFeedItem.edges;
//         return (
//             <div style={styles.root}>
//                 {tilesData.map(({node}) => (
//                     <span style={styles.item}><MediaCard article={node}/></span>
//                 ))}
//             </div>
//         );
//     }
// }

import Headlines, {HeadlinesQuery} from './Headlines';

const Home = Headlines;
export default Home;

export const HomeQuery  = graphql`
query HomeQuery {
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
}`;