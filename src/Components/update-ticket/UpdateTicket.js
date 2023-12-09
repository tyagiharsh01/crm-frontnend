import React from 'react';
import { Form, Button } from "react-bootstrap";

const UpdateTicket = ({msg,handleOnChange,handleOnsubmit}) => {
    return (
        <Form onSubmit={handleOnsubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Reply here or  give the update massage here.</Form.Text>
            <Form.Control as='textarea' value={msg} onChange={handleOnChange} row="5" name='detail' />
            <div className="text-right mt-3 mb-3">
                <Button type='submit' variant='info'>Reply</Button>
            </div>
        </Form>
    );
}

export default UpdateTicket;
