const markdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');
const highlightJs = require('markdown-it-highlightjs');
const MarkdownIt = require('markdown-it');

// Plugin to open links in a new tab
function linkNewTabPlugin(md) {
  // Remember the original 'link_open' rule
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    // Add target="_blank" attribute
    const aIndex = tokens[idx].attrIndex('target');
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank'; // replace existing attribute
    }
    // Call the original 'link_open' rule
    return defaultRender(tokens, idx, options, env, self);
  };
}

// Plugin to highlight keywords
function keywordHighlightPlugin(md, options) {
  options = options || {};
  const keywords = options.keywords || [];
  const className = options.className || 'highlight';

  const defaultRender = md.renderer.rules.text || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.text = function(tokens, idx, options, env, self) {
    let token = tokens[idx];
    let content = token.content;
    keywords.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedKeyword})`, 'gi');
      content = content.replace(regex, `<span class="${className}">$1</span>`);
    });
    token.content = content;
    return defaultRender(tokens, idx, options, env, self);
  };
}

// Export the plugins
module.exports = {
  linkNewTabPlugin,
  keywordHighlightPlugin
};

