/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';

const Hijo = React.memo(({ numero, incrementar }) => {
    console.log('  Me volví a generar :(  ');

    return (
        <button type='submit' className='btn btn-primary mr-3' onClick={() => incrementar(numero)}>
            {numero}
        </button>
    );
});

Hijo.propTypes = {
    numero: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired,
};

export default Hijo;
