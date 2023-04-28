

const centerHome = document.querySelector('#centerHome')


const newFormHandler = async function (event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const user = document.querySelector('h2[name="navUser"]').innerHTML;
    const body = document.querySelector('textarea[name="post-body"]').value;
    console.log(title,user,body)
    savePost({title:title, user:user, body:body}).then(() => {
        console.log('done')
    createPost({title:title, user:user, body:body})

    })
};




const savePost = (post) => {
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
        const postDate = document.createElement('h2');
        postDate.classList.add('RobotoMono','postUsername');
        const postUsername = document.createElement('h2');
        postUsername.classList.add('RobotoMono','postUsername');
        const postBody = document.createElement('p');
        postBody.classList.add('RobotoMono','postBody');
        PostEl.append(postDate);
        PostEl.append(postUsername);
        PostEl.append(postBody);
        // --------------------------------
        //add the comment elements 
        const formComment  = document.createElement('form');
        const textareaComment = document.createElement('textarea');
        textareaComment.classList.add('RobotoMono','postComment','commentInput');
        const CommentBtn = document.createElement('button');
        CommentBtn.classList.add('RobotoMono','postBtn');
        formComment.append(textareaComment);
        formComment.append(CommentBtn);
        PostEl.append(formComment);
        //add the comment elements 
        
        // create the date  --------------------------------
        
        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear()
        date = `${year}-${month}-${day}`
        
        //create the date  --------------------------------
        // add the texts in
        postTitle.innerText = title;
        postUsername.innerText = user;
        postBody.innerText = body;
        postDate.innerText = date;
        CommentBtn.innerHTML = 'comment';
        // append everythings
        console.log(flexcol)
        centerHome.prepend(PostCenEl);
        console.log(PostCenEl)
    }
    catch (err) {
        console.log(err)
    }
}


// Gets notes from the db and renders them to the sidebar
document.querySelector('.addPost').addEventListener('submit', newFormHandler);
