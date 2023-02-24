# Dependencies
| Name                | Functionality                                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| react               | the actual React library                                                                                          |
| react-dom           | lets us use React with the DOM                                                                                    |
| webpack             | to bundle our codes and their dependencies                                                                        |
| webpack-cli         | ?                                                                                                                 |
| webpack-dev-server  | ?                                                                                                                 |
| @babel/core         | to transform our code to what all browsers understand                                                             |
| babel-loader        | to transpile JavaScript files                                                                                     |
| @babel/preset-react | ?                                                                                                                 |
| @babel/preset-env   | ?                                                                                                                 |
| html-webpack-plugin | a plugin to assist with adding Webpack bundles file to HTML file                                                  |
| webpack-merge       | to include the common configuration in the environment-specific configurations (i.e., development and production) |

# Files Jobdesc
| Path       | Description                                               |
|------------|-----------------------------------------------------------|
| .babelrc   | babel config; tell babel to use preset-react & preset-env |

# Files Relation
Why 'this file' should be there?
| Path              | Reference                 |
|-------------------|---------------------------|
| src/index.js      | webpack.common.js         |
| src/index.html    | webpack.common.js         |

# React Methods
| References | Methods         | What's it for?                                                      |
|------------|-----------------|---------------------------------------------------------------------|
| React      | createRoot()    | create a root to display React components inside a browser DOM node |
| ReactDOM   | createElement() | create a virtual DOM                                                |
| ReactDOM   | render()        | render React component                                              |
