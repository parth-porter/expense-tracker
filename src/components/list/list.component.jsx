import './list-component-styles.css'

const List = (props) => {

    const {allItems, listTitle} = props;

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
                            
                        </div>
                        </div>
                        
                    
                    
                    </div>
                })}
            </div>
        </div>


    )
}

export default List;