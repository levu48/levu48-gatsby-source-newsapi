module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Viet News Net", // Site title.
  siteTitleAlt: "Viet News Net", // Alternative site title for SEO.
  siteLogo: "/logos/VietNewsNet_logo.png", // "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vietnewsnet.com", // Domain of your website without pathPrefix.
  pathPrefix: "/vnn", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Timely Objective News and Analysis", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "admin_vnn", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "San Francisco, US", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Knowledge is power.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/levu48/vietnewsnet",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/levu48",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:levu48@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. VietNewsNet" // Copyright string for the footer of the website and RSS feed.
};
