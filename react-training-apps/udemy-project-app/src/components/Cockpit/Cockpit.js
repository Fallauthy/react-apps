import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = styles.Button;

    if (props.showPersons) {
        // btnClass = styles.red;
        btnClass = [styles.Button, styles.red].join(' ');
    }

    if (props.persons.length <= 2) {
        classes.push(styles.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold); // classes = ['red', 'bold']
    }
    return (
        // <div className={styles.Cockpit}>
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </React.Fragment>
        // </div>
    );
}

export default React.memo(cockpit);