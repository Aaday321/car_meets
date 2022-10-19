
class User{
    constructor(){
        this.username = username;
        this.followers = [];
        this.following = [];
        this.posts = [];
        this.bio = null;
    }
}

class Post{
    constructor(){
        this.resource = resource;
        this.likes = [];
        this.comments = [];
    }
}