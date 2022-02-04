import React from 'react';
import {Controller} from "react-hook-form";
import Dropzone from 'react-dropzone'
import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#eee',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px'
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px'
    }
}))

export const FileInput = ({control, name}) => {


const styles = useStyles()

    return (

        <Controller
            control={control}
            name={name}
            render={({field: { onChange, onBlur, value, name, ref }}) => <>
                <Dropzone inputRef={ref}  onDrop={onChange}>
                    {
                        ({getRootProps, getInputProps}) => (
                            <>

                                <Paper className={styles.root} variant={"outlined"} {...getRootProps()}>
                                    <CloudUpload className={styles.icon}/>
                                    <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                    <p>Drag 'n' drop file here, or click to select files</p>
                                </Paper>
                            </>
                        )
                    }
                </Dropzone>
                <List>

                    {value?.map((f, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <InsertDriveFile />
                            </ListItemIcon>
                            <ListItemText primary={f.name} secondary={f.size} />
                        </ListItem>
                    ))}
                </List>
            </>
            }
        />

    );
};