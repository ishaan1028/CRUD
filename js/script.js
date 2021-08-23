



async function createUsers() {
    let data = await fetch('https://6122c6f2d446280017054953.mockapi.io/users');
    data = await data.json();
    let usersdiv = document.querySelector('.users');
    usersdiv.innerHTML = "";


    data.forEach(user => {


        usersdiv.innerHTML += `<div class="card">
                                <div class="imgcont">
                                    <img src="${user.avatar}" alt="" />
                                </div>
                                <div class="dets">
                                    <h3>${user.name}</h3>
                                    <p>${(new Date(user.createdAt)).toDateString()}</p>
                                </div>
                                <div class="btncont">
                                <button class="btns" onclick="delUser(${user.id})">Delete</button>
                                </div>

                                </div>`;

    });




}

createUsers();

async function delUser(id) {

    let deleted = await fetch('https://6122c6f2d446280017054953.mockapi.io/users/' + id, { method: "DELETE" });
    deleted = await deleted.json();
    console.log(deleted);

    createUsers();

}


async function addUser() {
    let nam = document.querySelector('#name').value;
    let avt = document.querySelector('#avt').value;

    let addProm = await fetch('https://6122c6f2d446280017054953.mockapi.io/users',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
            ,
            body: JSON.stringify({
                name: nam,
                avatar: avt,
                date: new Date().toISOString()

            })



        });

    addProm = await addProm.json();
    createUsers();


}