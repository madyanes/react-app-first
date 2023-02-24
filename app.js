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

  // the alternative way to create a react component is using JSX, but you can't directly execute JSX on a browser.
  const element2 = (
    <div>
      <form>
        <input type="text" />
      </form>
      <span>Time: {new Date().toLocaleTimeString()}</span>
    </div>
  );

  root.render(element1);
  root.render(element2);
};

setInterval(update, 1000);
