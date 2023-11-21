const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    domains: [
      'cdnstg.droppii.com',
      'cdn.droppii.com',
      'cdndev.droppii.com',
      'droppiistg.blob.core.windows.net',
      'droppii.blob.core.windows.net',
      'droppiidev.blob.core.windows.net',
      'cdnbeta.droppii.vn',
      'cdn.droppii.vn',
      'cdnstg.droppii.us',
      'cdn.droppii.us',
      'droppiiusprod.blob.core.windows.net',
    ],
  },
});

module.exports = nextConfig;
