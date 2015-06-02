require('babel/register')

var React = require('react')
var Router = require('react-router')
var AppContainer = require('./app/containers/AppContainer')
var routes = require('./app/routes/routes')


Router.run(routes, '/', function(Handler) {
  var mainApp = React.createFactory(Handler)
  console.log(React.renderToString(mainApp()))
})
