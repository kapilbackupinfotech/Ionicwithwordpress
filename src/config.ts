import wp from 'wpapi'

class Config {
    get postURLPrefix() {
        return 'news'
    }
    get pageURLPrefix() {
        return ''
    }
    get wordpressURL() {
        return'https://windsormews.co.uk/wp-json'
    }
    get wpClient() {
        return new wp({
            endpoint: this.wordpressURL
        })
    }
}

export default new Config()