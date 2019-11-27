document.addEventListener("DOMContentLoaded", event => {
    // const app = firebase.app();
    const db = firebase.firestore();
    const productRef = db.collection('products');
    // console.log(app);
    const query = productRef.orderBy('price')

    query.get()
        .then(products => {
            products.forEach(doc => {
                data = doc.data()
                document.write(`${data.name} at $${data.price} <br>`)
            })
        })

    // mehPost.onSnapshot(
    //     doc => {
    //     const data = doc.data();

    //     document.querySelector('#title').innerHTML = data.title;
    //     // document.write( data.title + `<br>`);
    //     // document.write( data.views + `<br>` );
    // });
});


// function updatePost(e){
//     const db = firebase.firestore();
//     const mehPost = db.collection('posts').doc('firstpost');
//     mehPost.update({ title: e.target.value });
// }

// function googleLogin(){
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)

//         .then(result => {
//             const user = result.user;
//             document.write(`Hello ${user.displayName}`);
//             console.log(user);
//         })
//         .catch(console.log)
// }