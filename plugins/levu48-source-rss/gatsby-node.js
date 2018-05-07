var fetch = require('node-fetch');
const crypto = require('crypto');

const createContentDigest = obj => crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex');

const createChildren = (entries, parentId, createNode) => {
    const childIds = [];
    entries.forEach(entry => {
      childIds.push(entry.url);

      const node = Object.assign({}, entry, {
        id: entry.url,
        title: entry.title,
        link: entry.url,
        description: entry.description,
        parent: parentId,
        children: []
      });

      node.internal = {
        type: 'NewsFeedItem',
        contentDigest: createContentDigest(node)
      };

      createNode(node);
    });
    return childIds;
  };

const sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators;

    const url = 'https://newsapi.org/v2/top-headlines'
            + '?apiKey=ca8f478ba3af4300ab29be359e0efc2f'
            + '&country=us';

    // const url = 'https://newsapi.org/v2/everything'
    //         + '?q=bitcoin'
    //         + '&apiKey=ca8f478ba3af4300ab29be359e0efc2f';
    
    // const url = 'https://newsapi.org/v2/top-headlines'
    // + '?apiKey=ca8f478ba3af4300ab29be359e0efc2f'
    // + '&country=cn';
           
    const data = await fetch(url).then(response => response.json());

    if (!data) {
        return;
    }

    //console.log('>>> DATA', data);

    const childrenIds = createChildren(data.articles, url, createNode);
    let feedStory = {
        id: url,
        title: 'Headline News, US',
        description: 'Top Headline News Today',
        link: url,
        parent: null,
        children: childrenIds
    }

    feedStory.internal = {
        type: 'NewsFeed',
        contentDigest: createContentDigest(feedStory)
    }

    createNode(feedStory);
    return;
}

exports.sourceNodes = sourceNodes;