require('babel-register')();//register babale to tanspile before test

require.extensions['.css'] = function(){}//disable webpack features that mocha wont understand
