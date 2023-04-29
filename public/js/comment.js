




const centerHome = document.querySelector('centerHome')


const CommentHandler = async function (event) {
    event.preventDefault();
    const user = document.querySelector('h2[name="navUser"]').innerHTML;
    const body = document.querySelector('textarea[name="post-body"]').value;
    console.log(user,body)
    savePost({ user:user, body:body}).then(() => {
        console.log('done')
    createPost({user:user, body:body})

    })
};



const saveComment = (comment) => {
    return fetch('/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        })

}




// Makes the Post
const createPost = ({user, body }) => {
    try {

        // --------------------------------
        //add the comment elements 
        const divComment  = document.createElement('div');
        const divComment2  = document.createElement('div');
        divComment2.classList.add('RobotoMono','postComment');
        const dateComment  = document.createElement('h2');
        dateComment.classList.add('RobotoMono','commentData');
        const usernameComment  = document.createElement('h2');
        usernameComment.classList.add('RobotoMono','commentUsername');
        const bodyComment = document.createElement('p');
        bodyComment.classList.add('RobotoMono','postBody');
        const CommentBtn = document.createElement('button');
        CommentBtn.classList.add('RobotoMono','commentBtn');
        divComment.append(bodyComment);
        divComment.append(CommentBtn);
        PostEl.append(divComment);
        //add the comment elements 
        
        // create the date  --------------------------------
        
        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear()
        date = `${year}-${month}-${day}`
        
        //create the date  --------------------------------
        // add the texts in
        usernameComment.innerText = user;
        bodyComment.innerText = body;
        dateComment.innerText = date;
        CommentBtn.innerHTML = 'comment';
        // append everythings
        centerHome.prepend(PostCenEl);
        console.log(PostCenEl)
    }
    catch (err) {
        console.log(err)
    }
}




// Gets notes from the db and renders them to the sidebar
document.querySelector('.commentBtn').addEventListener('submit', CommentHandler);
