import React, {useState} from 'react';
import {MainContainer} from "./MainContainer";
import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {InsertDriveFile} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Swal from "sweetalert2";
import ReactConfetti from "react-confetti";
import {PrimaryButton} from "./PrimaryButton";


const useStyles = makeStyles({
    root: {
        margin: '30px',
        width: 'auto'
    },
    table: {
        margin: '30px',
        width: 'auto'
    }
})


export const Result = ({formData}) => {

    const [success, setSuccess] = useState(false)

    const styles = useStyles()

    let entries
    if (formData) {
        entries = Object.entries(formData).filter((entry) => entry[0] !== 'files')
    }
    const {files} = formData

    const onSubmit = () => {
        debugger
        const finalFormData = new FormData()

        if (formData.files) {
            formData.files.forEach(file => {
                finalFormData.append('files', files, file.name)
            })
        }

        entries.forEach(entries => {
            finalFormData.append(entries[0], entries[1])
        })
        
        //finalFormData need to push on server


        Swal.fire('Great job!', "You've passed the challenge", 'success')
        setSuccess(true)

    }
    if (success) {
        return <ReactConfetti/>
    }

    return (
        <div>
            <MainContainer>
                <Typography component={'h2'} variant={'h5'}>
                    Form Values
                </Typography>
                <TableContainer className={styles.root}>
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Field
                                </TableCell>
                                <TableCell align={'right'}>
                                    Value
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {entries.map(entry => (
                                <TableRow key={entry[0]}>
                                    <TableCell>
                                        {entry[0]}
                                    </TableCell>
                                    <TableCell align={'right'}>
                                        {entry[1]?.toString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {files && (
                    <>
                        <Typography component={'h2'} variant={'h5'}>
                            Files
                        </Typography>
                        <List>
                            {files.map((files, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={files.name} secondary={files.size}/>
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}
                <Button onClick={onSubmit} className={styles.root} type={'submit'} fullWidth variant={'contained'}
                        color={'primary'}>
                    send
                </Button>
                <Link to={'/'}>Start over</Link>
            </MainContainer>
        </div>
    );
};

