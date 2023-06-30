import axios from 'axios';

class curatorAPIRepository {
    /**
     * Constructor
     */
    constructor(){
        this.baseUrl = null;
        this.version = 1;
        this.api = null;
    }

    /**
     * Sets the base url
     */
    set BaseURL(url){
        if(url) {
            let val = (url.endsWith('/')) ? v.substr(0, url.length - 1): url;
            this.baseUrl = val;
        }
    }
    /**
     * Gets the api endpoint
     */
    get Endpoint(){
        return `${this.baseUrl}/api/v${this.version}`;
    }

    initialise(){
        this.api = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'ClientId': clientId,
                'X-Requested-With': 'XMLHttpRequest'
            },
        });
    }
}