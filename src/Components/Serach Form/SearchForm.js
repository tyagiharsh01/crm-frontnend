import React from 'react'
import { Form,Row,Col } from "react-bootstrap";

const SearchForm = ({handleOnChange,str}) => {
    console.log(str)
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
            <Form.Label column as sm="3">Search:</Form.Label>
            <Col  sm ="9">
            <Form.Control name ='searchStr' placeholder='search.....' onChange={handleOnChange} value={str} />
            </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchForm
