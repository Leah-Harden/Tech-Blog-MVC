

const savePost = (post) =>{
    try{
        
        fetch('/api/post', {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
} catch (err){
    console.log(err)
}    
}
    
    
const handlePostSave = (e) => {
    preventDefault(e) 
    try{

        const newPost = {
            title: postTitle.value,
            user_id: postUser.value,
            body: postbody.value,
        };
        savePost(newPost).then(() => {
            createPost(newPost)
            
        });
    } catch (err){
        console.log(err)
    }
};


// Makes the Post
const createPost = ({ title, user, body }) => {
    try {
        // add the elements
        const PostCenEl = document.createElement('div');
        PostCenEl.classList.add('postCenter');
        const PostEl = document.createElement('div');
        PostEl.classList.add('post');
        const postTitle = document.createElement('h2');
        // --------------------------------
        // add the text elements
        postTitle.classList.add('RobotoMono postTitle');
        const postUsername = document.createElement('h2');
        postUsername.classList.add('RobotoMono postUsername');
        const postBody = document.createElement('p');
        postBody.classList.add('RobotoMono postBody');
        const postButton = document.createElement('button');
        postButton.classList.add('RobotoMono postBtn');
        // add the texts in
        postTitle.innerText = title;
        postUsername.innerText = user;
        postBody.innerText = body;
        delBtnEl.addEventListener('click', handleNoteDelete);
    } catch (err) {
        console.log(err)
    }
}


// Gets notes from the db and renders them to the sidebar
document.querySelector('addPost').addEventListener('submit', handlePostSave);
