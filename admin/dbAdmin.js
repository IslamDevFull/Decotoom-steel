import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0v1hneOWpDI5F8fFZzBx3uBqLZ7NzGVc",
    authDomain: "decoroom-steel.firebaseapp.com",
    databaseURL: "https://decoroom-steel-default-rtdb.firebaseio.com",
    projectId: "decoroom-steel",
    storageBucket: "decoroom-steel.appspot.com",
    messagingSenderId: "358541889072",
    appId: "1:358541889072:web:66bf896193c3c8243727f5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const refDB = ref(db);

const appEl = document.getElementById('app');
const cont = document.getElementById('cont');


document.getElementById('ok').addEventListener('click', () => {
    let loginName = document.getElementById('login').value;
    let parolName = document.getElementById('parol').value;

    if(loginName == 'root' && parolName == 'root'){
        document.getElementById('cont').classList.add('show');
        document.querySelector('.form').classList.add('non');
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Пароль неверный, повторите еще раз.",
            footer: '<a href="https://decoroomsteel.uz/">Вернутся назад</a>'
          });
    }

});

onValue(refDB, (e) => {
    appEl.innerHTML = '';
    if (e.exists()) {
        let tovar = e.val();
        let tovarOBJ = Object.entries(tovar);
        for (let i = 0; i < tovarOBJ.length; i++) {
            let allTovar = tovarOBJ[i];
            let tovarKey = allTovar[0];
            let tovarInfo = allTovar[1]
            // console.log(tovarInfo);
            appEl.innerHTML += `
                <tr>
                    <td style='padding: initial;'><img src='${tovarInfo.photos}'></td>
                    <td>${tovarInfo.models}</td>
                    <td>${tovarInfo.numbers}</td>
                    <td>${tovarInfo.prices}</td>
                    <td>${tovarInfo.userName}</td>
                    <td><a href='tel: ${tovarInfo.userTelefon}'>${tovarInfo.userTelefon}</td>
                    <td><i data-del='${tovarKey}' class="fa fa-trash" aria-hidden="true"></i></td>
                </tr>
                `;
        }
    }
    else {
        cont.innerHTML = `<h1>Заказов нет!</h1>`;
    }

});
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash')) {
        let test = event.target.getAttribute('data-del');
        remove(ref(db, test));
    }
    else {
        console.log(0)
    }
});
// };