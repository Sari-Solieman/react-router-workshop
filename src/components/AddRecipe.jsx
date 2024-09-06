import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddRecipe() {
    return (
        <form action="">
            <TextField id="standard-basic" label="Title" variant="standard" />

            <Button variant="contained">Create</Button>

        </form>
    );
}