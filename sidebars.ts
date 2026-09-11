import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Mirrors the structure of the original HonKit SUMMARY.md table of contents.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'README',
    {
      type: 'link',
      label: 'Store',
      href: 'https://cellhasher.com/',
    },
    {
      type: 'category',
      label: 'Cellhasher Chassis',
      items: [
        'cellhasher-chassis/setup',
        'cellhasher-chassis/setup-1',
        'cellhasher-chassis/set-up-pre-installed-phones',
      ],
    },
    {
      type: 'category',
      label: 'Cellhasher Control',
      items: [
        'cellhasher-control/set-up-download',
        {
          type: 'category',
          label: 'Tabs Walkthrough',
          link: {type: 'doc', id: 'cellhasher-control/tabs-walkthrough/README'},
          items: [
            'cellhasher-control/tabs-walkthrough/devices',
            'cellhasher-control/tabs-walkthrough/network',
            'cellhasher-control/tabs-walkthrough/battery',
            'cellhasher-control/tabs-walkthrough/mirror',
            'cellhasher-control/tabs-walkthrough/automation',
            'cellhasher-control/tabs-walkthrough/miner',
            'cellhasher-control/tabs-walkthrough/package-manager',
            'cellhasher-control/tabs-walkthrough/scripts',
            'cellhasher-control/tabs-walkthrough/terminal',
            'cellhasher-control/tabs-walkthrough/indexTab',
            'cellhasher-control/tabs-walkthrough/ai-llms',
            'cellhasher-control/tabs-walkthrough/settings',
          ],
        },
        'cellhasher-control/installing',
        {
          type: 'category',
          label: 'Debugging',
          link: {type: 'doc', id: 'cellhasher-control/debugging/index'},
          items: [
            'cellhasher-control/debugging/linux',
            'cellhasher-control/debugging/mac',
            'cellhasher-control/debugging/windows',
          ],
        },
        {
          type: 'category',
          label: 'How to Use',
          link: {type: 'doc', id: 'cellhasher-control/how-to-use/README'},
          items: [
            'cellhasher-control/how-to-use/devices',
            'cellhasher-control/how-to-use/battery',
            'cellhasher-control/how-to-use/network',
            'cellhasher-control/how-to-use/mirror',
            'cellhasher-control/how-to-use/package-manager',
            'cellhasher-control/how-to-use/miner',
            'cellhasher-control/how-to-use/index',
            'cellhasher-control/how-to-use/ai-llms-coming-soon',
            'cellhasher-control/how-to-use/settings',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional Docs',
      items: [
        'additional-docs/enabling-usb-and-wireless-debugging',
        'additional-docs/connection-modes-wi-fi-and-ethernet',
        'additional-docs/install-android-adb-fastboot-and-usb-drivers-install',
        'additional-docs/proxy-and-webrtc-settings',
      ],
    },
  ],
};

export default sidebars;
