

const centerHome = document.querySelector('#centerHome')


const commentHandler = async function (event) {
    event.preventDefault();

    const body = document.querySelector('textarea[name="post-body"]').value;
    console.log(body)
    savePost({body:body}).then(() => {
        console.log('done')
    createPost({title:title, user:user, body:body})

    })
};




const saveComment = (post) => {
    return fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })

}



// Makes the Post
const createPost = ({ title, user, body }) => {
    try {
        // add the elements
        const PostCenEl = document.createElement('div');
        PostCenEl.classList.add('postCenter');
        const PostEl = document.createElement('div');
        PostEl.classList.add('post');
        const postTitle = document.createElement('h2');
        PostCenEl.append(PostEl);
        PostEl.append(postTitle);
        // --------------------------------
        // add the text elements
        postTitle.classList.add('RobotoMono','postTitle');
        const postUsername = document.createElement('h2');
        postUsername.classList.add('RobotoMono','postUsername');
        const postBody = document.createElement('p');
        postBody.classList.add('RobotoMono','postBody');
        const postButton = document.createElement('button');
        postButton.classList.add('RobotoMono','postBtn');
        postButton.value.add('comment');
        PostEl.append(postUsername);
        PostEl.append(postBody);
        PostEl.append(postButton);
        // add the texts in
        postTitle.innerText = title;
        postUsername.innerText = user;
        postBody.innerText = body;
        // append everythings
        console.log(flexcol)
        centerHome.prepend(PostCenEl);
        console.log(PostCenEl)
    }
    catch (err) {
        console.log(err)
    }
}


<div>
<div class="RobotoMono postComment">
    <h2 class="RobotoMono commentData">5/3/2023</h2>
    <h2 class="RobotoMono commentUsername">Techie234:</h2>
    <hr class="commentHr">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore etF Fdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip
</div>
<form>
    <textarea class="RobotoMono postComment commentInput">
</textarea>
</form>
<button class="RobotoMono postBtn">Comment</button>
</div>








// Gets notes from the db and renders them to the sidebar
document.querySelector('.addPost').addEventListener('submit', newFormHandler);
