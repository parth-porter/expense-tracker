import './list-component-styles.css'

const List = (props) => {

    const {allItems, listTitle, itemHandler} = props;



    const logCheck = (event) => {
        console.log(event.target.id)
        const idElement = parseInt(event.target.id);

        let itemsClone = structuredClone(allItems)

        itemsClone = itemsClone.filter((item) => item.id !== idElement)


        console.log("Generated Object", itemsClone)
        console.log("current obj", allItems)


        itemHandler(itemsClone)

        console.log("New STATE", allItems)
    }

    return(
        <div className="list-component">
            <h3 className='list-title'>{listTitle}</h3>
            <hr />
            <div className='list-parent'>
                {allItems.map( (item) => {
                    const colorClass = (item.isPositive ? "list-item-positive" : "list-item-negative" )
                    return <div key={item.id} className={'list-item'}>
                        <div className='list-item-text'>
                        <p className='list-item-description'>{`${item.description}`}</p>
                        <p className='list-item-amount'>{`${item.amount}`}</p>
                        <div className={`list-item-end-strip ${colorClass}`}>
                            <button id={item.id} className="list-item-button" onClick={logCheck}>X</button>
                        </div>
                        </div>
                        
                    
                    
                    </div>
                })}
            </div>
        </div>


    )
}

export default List;