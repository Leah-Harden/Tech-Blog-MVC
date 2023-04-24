



const logoutHandler = async () => {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            document.location.replace('/')
        }
    } catch (err) {
        console.log("Error:", err);
    }
}


document.querySelector('#logout').addEventListener('click', logoutHandler);