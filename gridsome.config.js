// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rise',
  siteDescription: `Rise is Flywheel's employee resource group for underrepresented racial groups and allies.`,
  siteUrl: 'https://rise.getflywheel.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/newsletters/*.md',
        typeName: 'Newsletter',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates: {
    Newsletter: '/newsletter/:title'
  },
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
