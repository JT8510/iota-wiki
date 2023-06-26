/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docs: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Data Marketplace',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'data-marketplace/overview',
        },
        'data-marketplace/architecture',
        'data-marketplace/deployment-and-testing',
      ],
    },
    {
      type: 'category',
      label: 'Document Immutability',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'doc-immutability/overview',
        },
        'doc-immutability/architecture',
        'doc-immutability/deployment-and-testing',
      ],
    },
    {
      type: 'category',
      label: 'Tangle Data Storage',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'tangle-data-storage/overview',
        },
        'tangle-data-storage/architecture',
        'tangle-data-storage/deployment-and-testing',
      ],
    },
    {
      type: 'category',
      label: 'Track And Trace',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'track-and-trace/overview',
        },
        'track-and-trace/architecture',
        'track-and-trace/deployment-and-testing',
        {
          type: 'link',
          href: 'https://iotaledger.github.io/gtsc-track-trace/tutorial/track-trace-ledger-api-tutorial-101',
          label: 'Track And Trace/REST API 101 Tutorial',
        },
      ],
    },
  ],
};
