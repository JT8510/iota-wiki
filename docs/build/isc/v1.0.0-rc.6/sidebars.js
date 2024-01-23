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
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  EVMSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          label: 'Languages & VMs',
          id: 'getting-started/languages-and-vms',
        },
        'getting-started/quick-start',
        'getting-started/compatibility',
        {
          type: 'doc',
          label: 'Networks & Chains',
          id: 'getting-started/networks-and-chains',
        },
        {
          type: 'doc',
          label: 'Tools',
          id: 'getting-started/tools',
        },
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      items: [
        {
          type: 'doc',
          label: 'ISC Functionality',
          id: 'explanations/isc-functionality',
        },
        {
          type: 'doc',
          label: 'ISC Architecture',
          id: 'explanations/isc-architecture',
        },
        {
          type: 'doc',
          label: 'Anatomy of a Smart Contract',
          id: 'explanations/smart-contract-anatomy',
        },
        {
          type: 'doc',
          label: 'Sandbox Interface',
          id: 'explanations/sandbox',
        },
        {
          type: 'doc',
          label: 'Calling a Smart Contract',
          id: 'explanations/invocation',
        },
        {
          type: 'doc',
          label: 'State, Transitions and State Anchoring',
          id: 'explanations/states',
        },
        {
          type: 'doc',
          label: 'State manager',
          id: 'explanations/state_manager',
        },
        {
          type: 'doc',
          label: 'Validators and Access Nodes',
          id: 'explanations/validators',
        },
        {
          type: 'doc',
          label: 'Consensus',
          id: 'explanations/consensus',
        },
        {
          type: 'doc',
          label: 'How Accounts Work',
          id: 'explanations/how-accounts-work',
        },
        {
          type: 'link',
          label: 'Core Contracts',
          href: '/isc/reference/core-contracts/overview',
        },
      ],
    },

    {
      type: 'category',
      label: 'How To',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'EVM',
          collapsed: false,
          items: [
            {
              type: 'doc',
              label: 'Use EVM in ISC',
              id: 'how-tos/EVM/using',
            },
            {
              type: 'doc',
              label: 'Create a Basic Solidity Contract',
              id: 'how-tos/EVM/create-a-basic-contract',
            },
            {
              type: 'doc',
              label: 'Create Custom Tokens - ERC20',
              id: 'how-tos/EVM/ERC20',
            },
            {
              type: 'doc',
              label: 'Create NFTs - ERC721',
              id: 'how-tos/EVM/ERC721',
            },
          ],
        },
        {
          type: 'category',
          label: 'Use the Magic Contract',
          items: [
            {
              type: 'doc',
              label: 'Use the Magic Contract',
              id: 'how-tos/use-the-magic-contract/magic',
            },
            {
              type: 'doc',
              label: 'Send Tokens to L1',
              id: 'how-tos/use-the-magic-contract/send-tokens-to-l1',
            },
            {
              type: 'doc',
              label: 'Deposit To a Chain',
              id: 'how-tos/use-the-magic-contract/deposit-to-a-chain',
            },
            {
              type: 'doc',
              label: 'Withdraw From a Chain',
              id: 'how-tos/use-the-magic-contract/withdraw-from-a-chain',
            },
            {
              type: 'doc',
              label: 'View Account Balances',
              id: 'how-tos/use-the-magic-contract/view-account-balances',
            },
          ],
        },
        {
          type: 'category',
          label: 'Manage ISC Chains',
          items: [
            {
              id: 'how-tos/manage-chains/wasp-cli',
              label: 'Configure wasp-cli',
              type: 'doc',
            },
            {
              id: 'how-tos/manage-chains/setting-up-a-chain',
              label: 'Set Up a Chain',
              type: 'doc',
            },
            {
              id: 'how-tos/manage-chains/chain-management',
              label: 'Manage a Chain',
              type: 'doc',
            },
          ],
        },
        {
          type: 'category',
          label: 'Test Smart Contracts with Solo',
          items: [
            {
              type: 'doc',
              label: 'What is Solo?',
              id: 'how-tos/solo/what-is-solo',
            },
            {
              type: 'doc',
              label: 'First Example',
              id: 'how-tos/solo/first-example',
            },
            {
              type: 'doc',
              label: 'The L1 Ledger',
              id: 'how-tos/solo/the-l1-ledger',
            },
            {
              type: 'doc',
              label: 'Deploy a Smart Contract',
              id: 'how-tos/solo/deploying-sc',
            },
            {
              type: 'doc',
              label: 'Invoke a Smart Contract',
              id: 'how-tos/solo/invoking-sc',
            },
            {
              type: 'doc',
              label: 'Call a View',
              id: 'how-tos/solo/view-sc',
            },
            {
              type: 'doc',
              label: 'Error Handling',
              id: 'how-tos/solo/error-handling',
            },
            {
              type: 'doc',
              label: 'Accounts',
              id: 'how-tos/solo/the-l2-ledger',
            },
            {
              type: 'doc',
              label: 'Test Smart Contracts',
              id: 'how-tos/solo/test',
            },
            {
              type: 'doc',
              label: 'Example Tests',
              id: 'how-tos/solo/examples',
            },
            {
              type: 'doc',
              label: 'Colored Tokens and Time Locks',
              id: 'how-tos/solo/timelock',
            },
          ],
        },
        {
          type: 'category',
          label: 'Wasm VM (experimental)',
          items: [
            {
              type: 'doc',
              label: 'The Schema Tool',
              id: 'how-tos/wasm/introduction',
            },
            {
              type: 'doc',
              label: 'Create a Schema',
              id: 'how-tos/wasm/usage',
            },
            {
              type: 'doc',
              label: 'Define the State',
              id: 'how-tos/wasm/state',
            },
            {
              type: 'doc',
              label: 'Use Structured Data Types',
              id: 'how-tos/wasm/structs',
            },
            {
              type: 'doc',
              label: 'Generate Type Definitions',
              id: 'how-tos/wasm/typedefs',
            },
            {
              type: 'doc',
              label: 'Trigger Events',
              id: 'how-tos/wasm/events',
            },
            {
              type: 'doc',
              label: 'Define Functions',
              id: 'how-tos/wasm/funcs',
            },
            {
              type: 'doc',
              label: 'Limit Access',
              id: 'how-tos/wasm/access',
            },
            {
              type: 'doc',
              label: 'Define Function Parameters',
              id: 'how-tos/wasm/params',
            },
            {
              type: 'doc',
              label: 'Define Function Results',
              id: 'how-tos/wasm/results',
            },
            {
              type: 'doc',
              label: 'Use Thunk Functions',
              id: 'how-tos/wasm/thunks',
            },
            {
              type: 'doc',
              label: 'Use View-Only Functions',
              id: 'how-tos/wasm/views',
            },
            {
              type: 'doc',
              label: 'Initialize a Smart Contract',
              id: 'how-tos/wasm/init',
            },
            {
              type: 'doc',
              label: 'Transfer Tokens',
              id: 'how-tos/wasm/transfers',
            },
            {
              type: 'doc',
              label: 'Add Function Descriptors',
              id: 'how-tos/wasm/funcdesc',
            },
            {
              type: 'doc',
              label: 'Call Functions',
              id: 'how-tos/wasm/call',
            },
            {
              type: 'doc',
              label: 'Post Asynchronous Requests',
              id: 'how-tos/wasm/post',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/json-rpc-spec',
        'reference/magic-contract',
        {
          type: 'category',
          label: 'Core Contracts',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'reference/core-contracts/overview',
            },
            {
              type: 'doc',
              label: 'root',
              id: 'reference/core-contracts/root',
            },
            {
              type: 'doc',
              label: 'accounts',
              id: 'reference/core-contracts/accounts',
            },
            {
              type: 'doc',
              label: 'blob',
              id: 'reference/core-contracts/blob',
            },
            {
              type: 'doc',
              label: 'blocklog',
              id: 'reference/core-contracts/blocklog',
            },
            {
              type: 'doc',
              label: 'governance',
              id: 'reference/core-contracts/governance',
            },
            {
              type: 'doc',
              label: 'errors',
              id: 'reference/core-contracts/errors',
            },
            {
              type: 'doc',
              label: 'EVM',
              id: 'reference/core-contracts/evm',
            },
          ],
        },
        {
          type: 'doc',
          label: 'WasmLib Data Types',
          id: 'reference/wasm-lib-data-types',
        },
      ],
    },
  ],
};
