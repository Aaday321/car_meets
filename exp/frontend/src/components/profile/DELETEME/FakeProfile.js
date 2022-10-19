
const ritchie = require('./photos/ritchie.jpg')
let allUsers = []
const DEFAULT_PHOTO = 'Some-Path'

const makeNewUser = (username) =>{
    const newUser = new User(username)
    newUser.profilePicture = ritchie;
    allUsers.push(newUser);
    return newUser;
}


class User{
    constructor(username){
        this.username = username;
        this.followers = [];
        this.following = [];
        this.posts = [];
        this.profilePicture = DEFAULT_PHOTO;
        this.bio = null;
    }
}

class Post{
    constructor(resource){
        this.resource = resource;
        this.likes = [];
        this.comments = [];
    }
}



var DennisRitchie = makeNewUser("D_Ritch")

const makeNewPost = (res)=>{
    const newPost = new Post(res);
    allUsers[0].posts.push(newPost);
}

for (let i = 0; i < 7; i++) {
    let ext = '.jpg'
    if(i+1 === 5){
        ext='.gif'
    }

    makeNewPost(`./DELETEME/photos/${i+1}${ext}`)
    
}



export default DennisRitchie;