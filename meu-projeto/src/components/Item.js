import PropTypes from 'prop-types'

function item({marca, lancamento}){
    return(
    <>
        <li>
            {marca} - {lancamento}
        </li>    
    </>
    )
};

item.propType = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

item.defaultProps = {
    marca: 'faltou a marca',
    lancamento: 0,
}
export default item;