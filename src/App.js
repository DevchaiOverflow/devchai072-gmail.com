import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './Components/Containers/Layout'

const muiTheme = createMuiTheme({
	typography: {
		// Use the system font.
		fontFamily: 'Prompt, sans-serif',
		//   useNextVariants: true
	},
	breakpoints: {//For Responsive
		values: {
			xs: 0,
			sm: 768,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	}
})

const App = () => {
	return (
	  <ThemeProvider theme={muiTheme}>
		<Layout/>
	  </ThemeProvider>
	)
}

export default App;
