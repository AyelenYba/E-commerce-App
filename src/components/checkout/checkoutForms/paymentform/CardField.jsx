import React from 'react';
import { Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap';

const CardField = ({name, type, label, placeholder, value, setState, onFocusHandle }) => {

    return (
        <FormGroup as={Col}>
        <FormLabel>{label}</FormLabel>
        <FormControl
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onFocus={onFocusHandle}
        onChange={e => setState(e.target.value)}
        required
        >
        </FormControl>
    </FormGroup>
    )
}

export default CardField;