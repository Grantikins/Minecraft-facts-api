
class Site_Controller{

    serveIndex(request, response){
        response.sendFile("index.html") 
    }

}

module.exports = new Site_Controller()