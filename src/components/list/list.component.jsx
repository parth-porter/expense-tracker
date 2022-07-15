import './list-component-styles.css'

const List = (props) => {

    const {allItems, listTitle} = props;

    return(
        <div className="list-component">
            <h3>{listTitle}</h3>
            <hr />
            <ul>
                {allItems.map( (item) => {
                    const colorClass = (item.isPositive ? "list-item-positive" : "list-item-negative" )
                    return <li key={item.id} className={`list-item ${colorClass}`}>{`${item.description} ${item.amount} ${item.isPositive}`}</li>
                })}
            </ul>
        </div>


    )
}

export default List;