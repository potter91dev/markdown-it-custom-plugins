# markdown-it-custom-plugins

This library provides a set of custom plugins for the popular Markdown parser, [markdown-it](https://github.com/markdown-it/markdown-it). Enhance your Markdown content with features like opening links in new tabs and highlighting specific keywords.

## Features

- **Link New Tab Plugin**: Automatically adds `target="_blank"` to links, making them open in a new tab.
- **Keyword Highlight Plugin**: Allows you to highlight specified keywords with a custom CSS class.

## Installation

Install `markdown-it-custom-plugins` using npm:

```bash
npm install markdown-it-custom-plugins
```

This library also requires `markdown-it` to be installed. If you haven't installed `markdown-it` yet, add it to your project using:

```bash
npm install markdown-it
```

## Usage

First, import `markdown-it` and the custom plugins from this library:

```javascript
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const { linkNewTabPlugin, keywordHighlightPlugin } = require('markdown-it-custom-plugins');
```

### Using the Link New Tab Plugin

To make all links in your Markdown content open in a new tab, use the `linkNewTabPlugin`:

```javascript
md.use(linkNewTabPlugin);

const markdownText = 'Check out [markdown-it](https://github.com/markdown-it/markdown-it)!';
console.log(md.render(markdownText));
```

### Using the Keyword Highlight Plugin

To highlight specific keywords in your Markdown content, use the `keywordHighlightPlugin` with options:

```javascript
md.use(keywordHighlightPlugin, {
keywords: ['markdown', 'plugin'],
className: 'highlight'
});

const markdownText = 'This plugin enhances markdown with custom features.';
console.log(md.render(markdownText));
```

## Options

### Keyword Highlight Plugin

- `keywords`: Array of strings. Keywords to highlight.
- `className`: String. The CSS class applied to highlighted keywords.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have ideas for improvement.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
