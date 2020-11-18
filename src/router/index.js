/** @format */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from '../layout'

import Home from '../pages/home/'
import Test from '../pages/test/'

const Routers = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/test' component={Test} />
			</Switch>
		</Layout>
	</BrowserRouter>
)

export default Routers
