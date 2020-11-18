/** @format */

import React from 'react'
import { withRouter } from 'react-router-dom'

function Layout(props) {
	return <React.Fragment>{props.children}</React.Fragment>
}

export default withRouter(Layout)
