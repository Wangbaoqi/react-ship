var theme = {
  plain: {
    background: "var(--bg-primary)",
    color: "var(--theme-plain)",
  },

  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: 'var(--theme-comment)',
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: 'var(--theme-punctuation)',
      },
    },
    {
      types: [
        "tag",
        "property",
        "namespace",
        "number",
        "boolean",
        "constant",
        "symbol",
        "unit",
        "hexcode",
        // "deleted",
      ],
      style: {
        color: 'var(--theme-tag)',
      },
    },
    {
      types: ['attr-name', 'operator', 'char', 'builtin', 'insterted', 'parameter', "selector"],
      style: {
        color: 'var(--theme-property)',
      },
    },
    {
      types: ["function"],
      style: {
        color: 'var(--theme-definition)'
      },
    },
    {
      types: ['string'],
      style: {
        color: 'var(--theme-string)'
      }
    },
    {
      types: ["important", "atrule", "keyword", "selector-class", "class-name", "maybe-class-name", "builtin"],
      style: {
        color: 'var(--theme-keyword)',
      },
    },
    {
      types: ["char", "attr-value", "regex"],
      style: {
        color: "#f87c32",
      },
    },
    {
      types: ["parameter"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity", "url"],
      style: {
        // color: "#67cdcc",
      },
    },
    {
      types: ["operator"],
      style: {
        background: 'transparent'
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "green",
      },
    },
  ],
};


export default theme