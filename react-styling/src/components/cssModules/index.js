import styles from './button.module.css';

function Button (props) {
    return (
    <>
        <button className={styles[props.variant || 'default']}>{props.variant || 'default'} Button</button>
    </>
    )
}

export default Button;