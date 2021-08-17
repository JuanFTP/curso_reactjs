import React from "react";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {WiRain} from 'react-icons/wi';

const NotFoundPage = () => {
	return (
		<Grid container
		direction="column"
		justifyContent="center"
		alignItems="center"
		className="full">
			<div className="highlight">
				<Grid container
				justifyContent="center"
				alignItems="center">
					<Grid item>
						<IconContext.Provider value={{size: "6em"}}>
							<WiRain />
						</IconContext.Provider>
					</Grid>
					<Grid item
						container
						direction="column"
						justifyContent="center"
						alignItems="center">
							<Typography align="center" variant="h4" color="inherit">
								404<br />
								Página no encontrada
							</Typography>
							<Link color="inherit"
							aria-label="menu"
							component={RouterLink}
							to="/main">
								Volver al inicio
							</Link>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
};

export default NotFoundPage;
