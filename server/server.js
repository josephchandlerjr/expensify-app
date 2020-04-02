const express = require('express'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 3000


const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath))

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index'))
})


app.listen(port, () => console.log(`Listening on port ${port}`))