



const postHomeCount = 0



const savePost = (post) =>
    fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

const getPost = () =>
    fetch('/api/post', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });


const handlePostSave = () => {
    const newPost = {
        title: postTitle.value,
        user: postUser.value,
        body: postbody.value,
    };
    savePost(newPost).then(() => {
        getAndRenderPosts()

    });
};


function addPostHomeFunction() {
    ++postHomeCount
}

// Makes the Post
const createPost = (title, user, body) => {
    const PostCenEl = document.createElement('div');
    PostCenEl.classList.add('postCenter');
    const PostEl = document.createElement('div');
    PostEl.classList.add('post');
    const postTitle = document.createElement('h2');

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
};




// Gets notes from the db and renders them to the sidebar
const getAndRenderPosts = () => getPost().then(createPost);

const addPostHome = document.querySelector('addPost').addEventListener('submit', addPostHomeFunction);

getAndRenderPosts()