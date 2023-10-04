const newsRouter = require('./news.route');
const courseRouter = require('./courses.route');
const siteRouter = require('./site.route');
const meRouter = require('./me.route');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses',courseRouter)
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
