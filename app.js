const rootNode = document.getElementById('root')
const root = ReactDOM.createRoot(rootNode)

const update = () => {
  const element1 = React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement('input', {
        type: 'text',
      })
    ),
    React.createElement(
      'span',
      null,
      'Time: ',
      new Date().toLocaleTimeString()
    )
  );
  root.render(element1);
};

setInterval(update, 1000);
