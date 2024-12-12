"use client";

import React, {useState} from "react";
import {Button} from 'react-bootstrap';

function Child({callback}: { callback: (event: React.MouseEvent<HTMLButtonElement>) => void }) {

    const [name, setName] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div>
            <div className={"form-group"}>
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={handleChange}/>
            </div>
            <Button type={"button"}
                    className={" btn btn-primary"}
                    onClick={callback}
            >CLick Me</Button>
        </div>
    )
}

const CallbackDemo = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked");
    }

    return (
        <div>CallbackDemo
            <Child callback={handleClick}/>
        </div>
    )
}
export default CallbackDemo
