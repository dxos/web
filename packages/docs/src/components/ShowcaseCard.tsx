import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  Chip,
  Stack
} from '@mui/material';
import { ShowcaseItem } from "../data/showcase";


export const ShowcaseCard = ({ data }: { data: ShowcaseItem }) => {
  return (
    <Card 
      variant="outlined"
      sx={{
        flex: 1,
        '& .MuiCardActionArea-root:hover': {
          color: 'inherit',
          textDecoration: 'none'
        }
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flex: 1,
          minHeight: '100%',
        }} 
        LinkComponent="a"
        href={data.location!}
        target="_blank"
      >
        <CardMedia
          component="img"
          height="150"
          image="/img/showcase/showcase-img-example.png"
          alt="DXOS Logo"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
          {data.description && (
            <Typography sx={{ marginBottom: 1.5 }} color="text.secondary">
              {data.description}
            </Typography>
          )}
          {data.tags && (
            <Stack sx={{ marginTop: 2 }} direction="row" spacing={1}>
              {data.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" />
              ))}
            </Stack>
          )}
        </CardContent>
        <Box sx={{ flex: 1 }} />
        <CardActions>
          {data.location && (<Button size="small">EXPLORE</Button>)}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
