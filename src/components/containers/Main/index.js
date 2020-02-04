import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Main.css';

const baseClassName = 'main-inner-container'

const Main = ({children}) => {
    const location = useLocation();
    const [classNames, setClassNames] = useState(baseClassName);
    const [showChildren, setShowChildren] = useState(false);

    console.log('render <Main>')

    useEffect(() => {
        setShowChildren(false);
        setClassNames(baseClassName)
        window.setTimeout(() => {
            setShowChildren(true);
        }, 200);
        window.setTimeout(() => {
            setClassNames(baseClassName.concat(' fade-in'));
        }, 500);
    }, [children, location]);

    return (
        <main>
            <div className={classNames}>
                {showChildren ? children : null}
            </div>
        </main>
    );
}

export default Main;