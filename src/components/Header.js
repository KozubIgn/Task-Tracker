import PropTypes from 'prop-types'
import Button from './Button';
//destructure in curly brackets - always pass object
// dont need to write obj.title
const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' :'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}/>
        </header>
    )

};
//default props (Obj)
//CSS style with CamelCase
Header.defaultProps = {
    title: 'task tracker'
}

//propTypes - types creator
//.isRequired - required value
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header

