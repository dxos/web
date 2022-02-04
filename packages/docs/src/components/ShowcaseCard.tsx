import * as React from "react";
import {
  Box,
  Card as MUICard,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  Chip,
  Stack,
  styled
} from '@mui/material';
import { ShowcaseItem } from "../data/showcase";


const StyledCard = styled(MUICard)({
  '& .MuiCardActionArea-root:hover': {
    color: 'inherit',
    textDecoration: 'none'
  }
});

export const ShowcaseCard = ({ data }: { data: ShowcaseItem }) => {
  return (
    <StyledCard 
      sx={{
        flex: 1
      }}
      variant="outlined">
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          flex: 1,
          minHeight: '100%',
        }} 
        LinkComponent="a"
        href={data.location}
        target="_blank">
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
                <Chip label={tag} variant="outlined" />
              ))}
            </Stack>
          )}
        </CardContent>
        <Box sx={{ flex: 1 }} />
        <CardActions>
          {data.location && (<Button size="small">EXPLORE</Button>)}
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
};
