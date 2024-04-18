import { useEffect } from "react";


export default function temp(){
    const getItems = () => {
        return [number, number + 1, number + 2];
    }

    return(
        <div>
            //...
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems}/>
        </div>
    )
}


export default function List({ getItems }){
    //...
    useEffect(() => {
        setItems(getItems())
        console.log('Updating items')
    }, [getItems])
}