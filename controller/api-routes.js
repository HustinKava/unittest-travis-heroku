module.exports = (app) => {
    const responseFn = (req, res) => {
        /* the comment below causes eslint to ignore the console.log when checking for issues */
        // eslint-disable-next-line no-console
        console.log('value of req = \n', req);

        res.send('Hello World Hi');
    };
    app.get("/", responseFn);



};