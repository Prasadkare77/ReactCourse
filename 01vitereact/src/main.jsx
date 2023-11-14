import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { jsx as _jsx  } from 'react/jsx-runtime.js'


function MyApp() {
  return(
    <>
      <div>
        <h1>Custom App</h1>
      </div>
    </>
  )
}

// const reactElement = {
//   type: 'div',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   childern: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a', 
  {href:'https:/google.com', target: '_blank'},
  'Click me to Visit'
)

const anotherUser = 'prasad'

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <App/>
)
