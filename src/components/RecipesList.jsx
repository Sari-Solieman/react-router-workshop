import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function RecipesList() {

    const [recipes, setRecipes] = useGetRecipes();

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

    return (
        <>
            <h1>Products List</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {recipes.map((name) => {
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
        </>
    );
}


function useGetRecipes() {
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/recipes');

            const result = await response.json();

            setRecipes(result.recipes);

        })();
    }, []);
    return [recipes, setRecipes];
}