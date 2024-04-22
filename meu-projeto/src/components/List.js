import Item from "./Item"

function List(){
    return (
        <>
        <h1>Minha lista</h1>
        <ul>
            <li>Item 1</li>
            <li>item 2</li>
            <Item marca = "Item marca" lancamento={2024}/>
            <Item marca = "Item marca" lancamento={1999}/>
            <Item lancamento={1200}/>
        </ul>
        </>
    )
};

export default List;