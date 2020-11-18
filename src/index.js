/** @format */

import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import Router from './router'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Router />, document.getElementById('root'))

serviceWorker.unregister()
