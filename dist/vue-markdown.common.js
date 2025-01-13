/**
 * vue-markdown v2.2.4-rc.2
 * https://github.com/miaolz123/vue-markdown
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/object/keys"), require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor-purify"), require("katex"), require("markdown-it-task-lists"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/core-js/get-iterator", "babel-runtime/core-js/object/keys", "markdown-it", "markdown-it-emoji", "markdown-it-sub", "markdown-it-sup", "markdown-it-footnote", "markdown-it-deflist", "markdown-it-abbr", "markdown-it-ins", "markdown-it-mark", "markdown-it-toc-and-anchor-purify", "katex", "markdown-it-task-lists"], factory);
	else if(typeof exports === 'object')
		exports["VueMarkdown"] = factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/object/keys"), require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor-purify"), require("katex"), require("markdown-it-task-lists"));
	else
		root["VueMarkdown"] = factory(root["babel-runtime/core-js/get-iterator"], root["babel-runtime/core-js/object/keys"], root["markdown-it"], root["markdown-it-emoji"], root["markdown-it-sub"], root["markdown-it-sup"], root["markdown-it-footnote"], root["markdown-it-deflist"], root["markdown-it-abbr"], root["markdown-it-ins"], root["markdown-it-mark"], root["markdown-it-toc-and-anchor-purify"], root["katex"], root["markdown-it-task-lists"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _keys = __webpack_require__(2);

	var _keys2 = _interopRequireDefault(_keys);

	var _markdownIt = __webpack_require__(3);

	var _markdownIt2 = _interopRequireDefault(_markdownIt);

	var _markdownItEmoji = __webpack_require__(4);

	var _markdownItEmoji2 = _interopRequireDefault(_markdownItEmoji);

	var _markdownItSub = __webpack_require__(5);

	var _markdownItSub2 = _interopRequireDefault(_markdownItSub);

	var _markdownItSup = __webpack_require__(6);

	var _markdownItSup2 = _interopRequireDefault(_markdownItSup);

	var _markdownItFootnote = __webpack_require__(7);

	var _markdownItFootnote2 = _interopRequireDefault(_markdownItFootnote);

	var _markdownItDeflist = __webpack_require__(8);

	var _markdownItDeflist2 = _interopRequireDefault(_markdownItDeflist);

	var _markdownItAbbr = __webpack_require__(9);

	var _markdownItAbbr2 = _interopRequireDefault(_markdownItAbbr);

	var _markdownItIns = __webpack_require__(10);

	var _markdownItIns2 = _interopRequireDefault(_markdownItIns);

	var _markdownItMark = __webpack_require__(11);

	var _markdownItMark2 = _interopRequireDefault(_markdownItMark);

	var _markdownItTocAndAnchorPurify = __webpack_require__(12);

	var _markdownItTocAndAnchorPurify2 = _interopRequireDefault(_markdownItTocAndAnchorPurify);

	var _mdKatex = __webpack_require__(13);

	var _mdKatex2 = _interopRequireDefault(_mdKatex);

	var _markdownItTaskLists = __webpack_require__(15);

	var _markdownItTaskLists2 = _interopRequireDefault(_markdownItTaskLists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import katex from 'markdown-it-katex'
	exports.default = {
	  md: new _markdownIt2.default(),

	  template: '<div><slot></slot></div>',

	  data: function data() {
	    return {
	      sourceData: this.source
	    };
	  },


	  props: {
	    watches: {
	      type: Array,
	      default: function _default() {
	        return ['source', 'show', 'toc'];
	      }
	    },
	    source: {
	      type: String,
	      default: ''
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    highlight: {
	      type: Boolean,
	      default: true
	    },
	    html: {
	      type: Boolean,
	      default: true
	    },
	    xhtmlOut: {
	      type: Boolean,
	      default: true
	    },
	    breaks: {
	      type: Boolean,
	      default: true
	    },
	    linkify: {
	      type: Boolean,
	      default: true
	    },
	    emoji: {
	      type: Boolean,
	      default: true
	    },
	    typographer: {
	      type: Boolean,
	      default: true
	    },
	    langPrefix: {
	      type: String,
	      default: 'language-'
	    },
	    quotes: {
	      type: String,
	      default: '“”‘’'
	    },
	    tableClass: {
	      type: String,
	      default: 'table'
	    },
	    taskLists: {
	      type: Boolean,
	      default: true
	    },
	    toc: {
	      type: Boolean,
	      default: false
	    },
	    tocId: {
	      type: String
	    },
	    tocClass: {
	      type: String,
	      default: 'table-of-contents'
	    },
	    tocFirstLevel: {
	      type: Number,
	      default: 2
	    },
	    tocLastLevel: {
	      type: Number
	    },
	    tocAnchorLink: {
	      type: Boolean,
	      default: true
	    },
	    tocAnchorClass: {
	      type: String,
	      default: 'toc-anchor'
	    },
	    tocAnchorLinkSymbol: {
	      type: String,
	      default: '#'
	    },
	    tocAnchorLinkSpace: {
	      type: Boolean,
	      default: true
	    },
	    tocAnchorLinkClass: {
	      type: String,
	      default: 'toc-anchor-link'
	    },
	    anchorAttributes: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    prerender: {
	      type: Function,
	      default: function _default(sourceData) {
	        return sourceData;
	      }
	    },
	    postrender: {
	      type: Function,
	      default: function _default(htmlData) {
	        return htmlData;
	      }
	    }
	  },

	  computed: {
	    tocLastLevelComputed: function tocLastLevelComputed() {
	      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1;
	    }
	  },

	  render: function render(createElement) {
	    var _this = this;

	    this.md = new _markdownIt2.default().use(_markdownItSub2.default).use(_markdownItSup2.default).use(_markdownItFootnote2.default).use(_markdownItDeflist2.default).use(_markdownItAbbr2.default).use(_markdownItIns2.default).use(_markdownItMark2.default).use(_mdKatex2.default, { "throwOnError": false, "errorColor": " #cc0000" }).use(_markdownItTaskLists2.default, { enabled: this.taskLists });

	    if (this.emoji) {
	      this.md.use(_markdownItEmoji2.default);
	    }

	    this.md.set({
	      html: this.html,
	      xhtmlOut: this.xhtmlOut,
	      breaks: this.breaks,
	      linkify: this.linkify,
	      typographer: this.typographer,
	      langPrefix: this.langPrefix,
	      quotes: this.quotes
	    });
	    this.md.renderer.rules.table_open = function () {
	      return '<table class="' + _this.tableClass + '">\n';
	    };
	    var defaultLinkRenderer = this.md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
	      return self.renderToken(tokens, idx, options);
	    };
	    this.md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
	      (0, _keys2.default)(_this.anchorAttributes).map(function (attribute) {
	        var aIndex = tokens[idx].attrIndex(attribute);
	        var value = _this.anchorAttributes[attribute];
	        if (aIndex < 0) {
	          tokens[idx].attrPush([attribute, value]); // add new attribute
	        } else {
	          tokens[idx].attrs[aIndex][1] = value;
	        }
	      });
	      return defaultLinkRenderer(tokens, idx, options, env, self);
	    };

	    if (this.toc) {
	      this.md.use(_markdownItTocAndAnchorPurify2.default, {
	        tocClassName: this.tocClass,
	        tocFirstLevel: this.tocFirstLevel,
	        tocLastLevel: this.tocLastLevelComputed,
	        anchorLink: this.tocAnchorLink,
	        anchorLinkSymbol: this.tocAnchorLinkSymbol,
	        anchorLinkSpace: this.tocAnchorLinkSpace,
	        anchorClassName: this.tocAnchorClass,
	        anchorLinkSymbolClassName: this.tocAnchorLinkClass,
	        tocCallback: function tocCallback(tocMarkdown, tocArray, tocHtml) {
	          if (tocHtml) {
	            if (_this.tocId && document.getElementById(_this.tocId)) {
	              document.getElementById(_this.tocId).innerHTML = tocHtml;
	            }

	            _this.$emit('toc-rendered', tocHtml);
	          }
	        }
	      });
	    }

	    var outHtml = this.show ? this.md.render(this.prerender(this.sourceData)) : '';
	    outHtml = this.postrender(outHtml);

	    this.$emit('rendered', outHtml);
	    return createElement('div', {
	      domProps: {
	        innerHTML: outHtml
	      }
	    });
	  },
	  beforeMount: function beforeMount() {
	    var _this2 = this;

	    if (this.$slots.default) {
	      this.sourceData = '';
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.$slots.default), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var slot = _step.value;

	          this.sourceData += slot.text;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }

	    this.$watch('source', function () {
	      _this2.sourceData = _this2.prerender(_this2.source);
	      _this2.$forceUpdate();
	    });

	    this.watches.forEach(function (v) {
	      _this2.$watch(v, function () {
	        _this2.$forceUpdate();
	      });
	    });
	  }
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var katex = __webpack_require__(14);

	// Test if potential opening or closing delimieter
	// Assumes that there is a "$" at state.src[pos]
	function isValidDelim(state, pos) {
	    var prevChar,
	        nextChar,
	        max = state.posMax,
	        can_open = true,
	        can_close = true;

	    prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
	    nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;

	    // Check non-whitespace conditions for opening and closing, and
	    // check that closing delimeter isn't followed by a number
	    if (prevChar === 0x20 /* " " */ || prevChar === 0x09 /* \t */ || nextChar >= 0x30 /* "0" */ && nextChar <= 0x39 /* "9" */) {
	        can_close = false;
	    }
	    if (nextChar === 0x20 /* " " */ || nextChar === 0x09 /* \t */) {
	            can_open = false;
	        }

	    return {
	        can_open: can_open,
	        can_close: can_close
	    };
	}

	function math_inline(state, silent) {
	    var start, match, token, res, pos, esc_count;

	    if (state.src[state.pos] !== "$") {
	        return false;
	    }

	    res = isValidDelim(state, state.pos);
	    if (!res.can_open) {
	        if (!silent) {
	            state.pending += "$";
	        }
	        state.pos += 1;
	        return true;
	    }

	    // First check for and bypass all properly escaped delimieters
	    // This loop will assume that the first leading backtick can not
	    // be the first character in state.src, which is known since
	    // we have found an opening delimieter already.
	    start = state.pos + 1;
	    match = start;
	    while ((match = state.src.indexOf("$", match)) !== -1) {
	        // Found potential $, look for escapes, pos will point to
	        // first non escape when complete
	        pos = match - 1;
	        while (state.src[pos] === "\\") {
	            pos -= 1;
	        }

	        // Even number of escapes, potential closing delimiter found
	        if ((match - pos) % 2 == 1) {
	            break;
	        }
	        match += 1;
	    }

	    // No closing delimter found.  Consume $ and continue.
	    if (match === -1) {
	        if (!silent) {
	            state.pending += "$";
	        }
	        state.pos = start;
	        return true;
	    }

	    // Check if we have empty content, ie: $$.  Do not parse.
	    if (match - start === 0) {
	        if (!silent) {
	            state.pending += "$$";
	        }
	        state.pos = start + 1;
	        return true;
	    }

	    // Check for valid closing delimiter
	    res = isValidDelim(state, match);
	    if (!res.can_close) {
	        if (!silent) {
	            state.pending += "$";
	        }
	        state.pos = start;
	        return true;
	    }

	    if (!silent) {
	        token = state.push('math_inline', 'math', 0);
	        token.markup = "$";
	        token.content = state.src.slice(start, match);
	    }

	    state.pos = match + 1;
	    return true;
	}

	function math_block(state, start, end, silent) {
	    var firstLine,
	        lastLine,
	        next,
	        lastPos,
	        found = false,
	        token,
	        pos = state.bMarks[start] + state.tShift[start],
	        max = state.eMarks[start];

	    if (pos + 2 > max) {
	        return false;
	    }
	    if (state.src.slice(pos, pos + 2) !== '$$') {
	        return false;
	    }

	    pos += 2;
	    firstLine = state.src.slice(pos, max);

	    if (silent) {
	        return true;
	    }
	    if (firstLine.trim().slice(-2) === '$$') {
	        // Single line expression
	        firstLine = firstLine.trim().slice(0, -2);
	        found = true;
	    }

	    for (next = start; !found;) {

	        next++;

	        if (next >= end) {
	            break;
	        }

	        pos = state.bMarks[next] + state.tShift[next];
	        max = state.eMarks[next];

	        if (pos < max && state.tShift[next] < state.blkIndent) {
	            // non-empty line with negative indent should stop the list:
	            break;
	        }

	        if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
	            lastPos = state.src.slice(0, max).lastIndexOf('$$');
	            lastLine = state.src.slice(pos, lastPos);
	            found = true;
	        }
	    }

	    state.line = next + 1;

	    token = state.push('math_block', 'math', 0);
	    token.block = true;
	    token.content = (firstLine && firstLine.trim() ? firstLine + '\n' : '') + state.getLines(start + 1, next, state.tShift[start], true) + (lastLine && lastLine.trim() ? lastLine : '');
	    token.map = [start, state.line];
	    token.markup = '$$';
	    return true;
	}

	module.exports = function math_plugin(md, options) {
	    // Default options

	    options = options || {};

	    // set KaTeX as the renderer for markdown-it-simplemath
	    var katexInline = function katexInline(latex) {
	        options.displayMode = false;
	        try {
	            return katex.renderToString(latex, options);
	        } catch (error) {
	            if (options.throwOnError) {
	                console.log(error);
	            }
	            return latex;
	        }
	    };

	    var inlineRenderer = function inlineRenderer(tokens, idx) {
	        return katexInline(tokens[idx].content);
	    };

	    var katexBlock = function katexBlock(latex) {
	        options.displayMode = true;
	        try {
	            return "<p>" + katex.renderToString(latex, options) + "</p>";
	        } catch (error) {
	            if (options.throwOnError) {
	                console.log(error);
	            }
	            return latex;
	        }
	    };

	    var blockRenderer = function blockRenderer(tokens, idx) {
	        return katexBlock(tokens[idx].content) + '\n';
	    };

	    md.inline.ruler.after('escape', 'math_inline', math_inline);
	    md.block.ruler.after('blockquote', 'math_block', math_block, {
	        alt: ['paragraph', 'reference', 'blockquote', 'list']
	    });
	    md.renderer.rules.math_inline = inlineRenderer;
	    md.renderer.rules.math_block = blockRenderer;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;