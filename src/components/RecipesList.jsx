import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useRecipesQuery } from '../queries/useRecipesQuery';



export default function RecipesList() {
    const recipesQuery =  useRecipesQuery();

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    if (recipesQuery.isError) {
        return <h2>{recipesQuery.error.message}</h2>
    }

    return (
        <>
            <h1>Recipes List</h1>
            {recipesQuery.isFetching
                ? <div>Loading Recipes...</div>
                : (
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {recipesQuery.data.map((name) => {
                            const labelId = `checkbox-list-label-${name.id}`;

                            return (
                                <ListItem
                                    key={name.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <CommentIcon />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(name.id)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(name.id) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={name.name} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                )
            }
        </>
    );
}

