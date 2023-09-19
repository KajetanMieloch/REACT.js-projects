

export const HomeFarm = (props) =>{

    return(
        <div>
            <h1>Home sweet home</h1>
            <button onClick={() => props.setCurrentStage(2)}>Go to town</button>
        </div>
    )
}