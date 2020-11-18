/** @format */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from '../layout'

import Home from '../pages/home/'

const Routers = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Layout>
	</BrowserRouter>
)

export default Routers
