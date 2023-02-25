# Dependencies
| Name                          | Functionality                                                                                                     |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------|
| react                         | the actual React library                                                                                          |
| react-dom                     | lets us use React with the DOM                                                                                    |
| webpack                       | to bundle our codes and their dependencies                                                                        |
| webpack-cli                   | ?                                                                                                                 |
| webpack-dev-server            | ?                                                                                                                 |
| @babel/core                   | to transform our code to what all browsers understand                                                             |
| babel-loader                  | to transpile JavaScript files                                                                                     |
| @babel/preset-react           | ?                                                                                                                 |
| @babel/preset-env             | ?                                                                                                                 |
| html-webpack-plugin           | a plugin to assist with adding Webpack bundles file to HTML file                                                  |
| webpack-merge                 | to include the common configuration in the environment-specific configurations (i.e., development and production) |
| mini-css-extract-plugin       | the type of loaders to use to transform CSS files                                                                 |
| css-loader                    | CSS loader                                                                                                        |

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

# React Methods/Properties
| References | Methods/Properties         | What's it for?                                                                            |
|------------|----------------------------|-------------------------------------------------------------------------------------------|
| React      | createRoot()               | create a root to display React components inside a browser DOM node                       |
| ReactDOM   | createElement()            | create a virtual DOM                                                                      |
| ReactDOM   | render()                   | render React component                                                                    |
| React      | Fragment                   | <React.Fragment></React.Fragment> is an empty node to be added to the DOM (alias: <></>)  |
| React      | StrictMode                 | <React.StrictMode></React.StrictMode> can help identify potential problems in our application during development and may log a warning message at runtime. |
| React      | useState()                 | returns an array contains two values: current state, and state setter function            |
| React      | useEffect()                | a function to wrap any effects we created and to clear them                               |
| React      | useRef()                   | to mark a DOM node which is affected by side effects                                      |

# Side Effect
Any action that modifies a state outside a component scope is a side effect and must isolate inside a `useEffect()` Hook.
