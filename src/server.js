import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

//initializing packages
const app = express()

//setting
//this mean that use the port of operating system or 3000 port
app.set('port', process.env.PORT || 3000)

//routes
app.get('/', (req, res) => {
    res.send('hello')
})

//api
app.get('/api', (req, res) => {
    res.json({api: 'Works'})
})

//start server
app.listen(app.get('port'), () => {
    console.log('Server run on port', app.get('port'))
})