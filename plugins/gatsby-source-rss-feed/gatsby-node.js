var fetch = require('node-fetch');
const crypto = require('crypto');
var Parser = require('rss-parser');

let parser = new Parser();

const createContentDigest = obj => crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex');

const createChildren = (entries, parentId, createNode) => {
    const childIds = [];
    entries.forEach(entry => {
      childIds.push(entry.link);

      const node = Object.assign({}, entry, {
        id: entry.link,
        title: entry.title,
        link: entry.link,
        description: entry.content,
        parent: parentId,
        children: []
      });

      node.internal = {
        type: 'RssFeedItem',
        contentDigest: createContentDigest(node)
      };

      createNode(node);
    });
    return childIds;
  };

const sourceNodes = async ({boundActionCreators}) => {
    const {createNode} = boundActionCreators;

    const url = 'https://news.google.com/news/rss/search/section/q/vietnam?ned=us&gl=US&hl=en'
           
    const data = await parser.parseURL(url);

    if (!data) {
        return;
    }

    console.log('>>> DATA', data);

    const childrenIds = createChildren(data.items, url, createNode);
    let feedStory = {
        id: url,
        title: 'Vietnam News',
        description: 'Vietnam News Today',
        link: url,
        parent: null,
        children: childrenIds
    }

    feedStory.internal = {
        type: 'RssFeed',
        contentDigest: createContentDigest(feedStory)
    }

    createNode(feedStory);
    return;
}

exports.sourceNodes = sourceNodes;