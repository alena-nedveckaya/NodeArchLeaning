import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Tabs.module.css';

const Tabs = props => {

    const [selectedTabIndex, changeSelectedTab] = useState(0);

    const tabs = props.children.map((item, index) =>(
        <li className={classNames(style.tab, index === selectedTabIndex && style.selected)}
            key = {index}
            onClick={() =>changeSelectedTab(index)}
        >
            {item.props.title}
        </li>
    ));

    return (
        <div>
            <ul className={style.list}>
                {tabs}
            </ul>
                <div className={style.tab}>{props.children[selectedTabIndex]}</div>

        </div>
    );
};

Tabs.propTypes = {
    
};

export default Tabs;