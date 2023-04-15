function FunctionEvent() {

    /* you can declare a constant to handle the click as shown below:
       const handleClick = () => {} 
     */
    function handleClick() {
        console.log("Button clicked!");
    }
    return (
        <div>
            <p>Functional Component</p>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default FunctionEvent;