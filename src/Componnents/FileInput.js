import React from 'react';
import {Controller} from "react-hook-form";
import Dropzone from 'react-dropzone'
import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";

export const FileInput = ({control, name}) => {


    let arr = [{path: 'art.jpg', name: 'art.jpg'}]
    return (

        <Controller
            control={control}
            name={name}
            render={({field: { onChange, onBlur, value, name, ref }}) => <>
                <Dropzone inputRef={ref}  onDrop={onChange}>
                    {
                        ({getRootProps, getInputProps}) => (
                            <>
                                <CloudUpload/>
                                <Paper variant={"outlined"} {...getRootProps()}>
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