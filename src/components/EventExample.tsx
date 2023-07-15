import React, {FC, useRef, useState} from "react";

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const chengeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("DRAG");
    };

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    return(
        <div>
            <input value={value} onChange={chengeHandler} type="text" placeholder="управляемый"/>
            <input ref={inputRef} type="text" placeholder="неуправляемый" />

            <button onClick={clickHandler}>click</button>
            <div 
            onDrag={dragHandler} 
            draggable
            style={{width: 200, height: 200, background: 'red'}}>
            </div>

            <div 
            onDrag={dropHandler} 
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            style={{width: 200, height: 200, background: isDrag ? "blue" : 'red', marginTop: 10}}></div>
        </div>
    )
}

export default EventsExample;