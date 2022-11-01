import React from "react";
import { Box, Button, TextField, Typography, ButtonGroup} from "@mui/material";

const Details = () => {
  return (
    <div >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>עיברית</Button>
        <Button>English</Button>
      </ButtonGroup>
    </Box>
      <form >
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
              '& button': { m: 1 } 
            }
          }}
        >
        <Typography variant="h2" padding={3} textAlign="center">
          Eazy Gift
          </Typography>
          <Typography variant="h4" padding={3} textAlign="center">
          Johnny and Lily's wedding
          </Typography>
          
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="name" variant="outlined" />
            </Box>
          
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="phone" variant="outlined" />
            
            </Box>

        <Box
        
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="blessing" variant="outlined" multiline rows={4}/>
        
        </Box>
        <Button size="small">
        List of written blessing
        </Button>
        <Button variant="contained" size="large">
        payment
        </Button>
        </Box>
        
      </form>
      
    </div>
  );
};

export default Details;
