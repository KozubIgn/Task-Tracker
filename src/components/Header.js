import PropTypes from 'prop-types'
import Button from './Button';
//destructure in curly brackets - always pass object
// dont need to write obj.title
const Header = ({title}) => {
    const onClick = () => {
        console.log('Click!')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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

