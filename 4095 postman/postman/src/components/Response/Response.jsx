import React from 'react';
import PropTypes from 'prop-types';
import Tabs from "../Tabs/Tabs";
import Panel from "../Panel/Panel";

const Response = props => {
    return (
        <div>
            <Tabs

            >
                <Panel title={'body'}>RESPONSE</Panel>
                <Panel title={'headers'}>HEADERS</Panel>
            </Tabs>
        </div>
    );
};

Response.propTypes = {

};

export default Response;