

export const Town = (props) =>{

    return(
        <div>
        <h1>This is town</h1>
        <button onClick={() => props.setCurrentStage(1)}>Go to your farm</button>
        <button onClick={() => props.setCurrentStage(3)}>Go to CHICKMART</button>
        </div>
    )
}