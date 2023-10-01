const newsRouter = require('./news.route');
const courseRouter = require('./courses.route');
const siteRouter = require('./site.route');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses',courseRouter)
    app.use('/', siteRouter);
}

module.exports = routes;
