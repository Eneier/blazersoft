import React from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface EmptyBoxProps {
    title: string;
}

const EmptyBox: React.FC<EmptyBoxProps> = ({title}) => {
    return (
        <Card sx={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'center',
            padding: '10px',
            border: '3px solid #1976d2',
            borderRadius: '10px'
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        <strong>{title}</strong>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default EmptyBox;