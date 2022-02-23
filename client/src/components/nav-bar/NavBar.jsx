
import React from 'react';



import { Box } from '@mui/system';
import NavLinks from './NavLinks';
import { Button, Grid } from '@material-ui/core';

export const NavBar = ({setAuthTokens,loggedInUser, logout, changeUser,setUser,user,setChangeUser }) => {
    const logo = require('../static/img/toribio-ecommerce.png')
 

    return (
        <div className='bg-dark'>
            <Box >

                <Grid>

                

                {/* <div> */}
                    <NavLinks setAuthTokens={setAuthTokens}
                    logout={logout} setUser={setUser} user={user} changeUser={changeUser}
                    setChangeUser={setChangeUser} loggedInUser={loggedInUser}/>
              
                    </Grid>
                    
            </Box>

             
                
            <div>
            
            </div>

        </div>

    )
}