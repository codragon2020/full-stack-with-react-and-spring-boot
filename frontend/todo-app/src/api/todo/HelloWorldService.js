import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        console.log('executed bean service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        console.log('executed path variable service')
        // let username = 'IndiaPaleAle'
        // let password = 'Test123$'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );
    }
}

export default new HelloWorldService()