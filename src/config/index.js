if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}

module.exports = {
    API_KEY_GIF: process.env.REACT_APP_API_KEY,
    PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
};
