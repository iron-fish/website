module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',

    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 4,
        }),
      )
      return postcssOptions
    },

    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-import'),
                      require('tailwindcss'),
                      require('postcss-preset-env')({
                        autoprefixer: {
                          flexbox: 'no-2009',
                        },
                        stage: 4,
                      }),
                    ],
                  },
                },
              ],
            },
          ],
        },
      }
    },
  }
}