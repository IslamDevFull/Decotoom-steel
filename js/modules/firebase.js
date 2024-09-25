
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

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
const refDB = ref(db,);

document.querySelector('.btn-order').addEventListener('click', () => {
    var prodectModel = document.querySelectorAll('.cart-model');
    var prodectLink = document.querySelectorAll('.js-link-card');
    var prodectPrice = document.querySelectorAll('.js-cart-price');
    var prodectPhoto = document.querySelectorAll('.cart-img');
    var prodectNum = document.querySelectorAll('.js-current-items');

    var jsCartOrderContainer = document.querySelector('.js-cart-order-container');
    var jsCartEmptyContainer = document.querySelector('.js-cart-empty-container');
    var jsCartList = document.querySelector('.js-cart-list');

    var orderName = document.querySelector('.orderName').value;
    var orderTelefon = document.querySelector('.orderTelefon').value;
    if (orderName == '' && orderTelefon == '') {
        // console.log(1);
        document.querySelector('.orderName').classList.add('orderNameBorder');
        document.querySelector('.orderTelefon').classList.add('orderNameBorder');
    }
    else if(orderName == ''){
        document.querySelector('.orderName').classList.add('orderNameBorder');
    }
    else if(orderTelefon == ''){
        document.querySelector('.orderTelefon').classList.add('orderNameBorder');
    }
    else {
        // console.log(0);
        for (let i = 0; i < prodectModel.length; i++) {
            push(refDB, {
                userName: orderName,
                userTelefon: orderTelefon,
                models: prodectModel[i].textContent,
                prices: prodectPrice[i].textContent,
                photos: prodectPhoto[i].src,
                numbers: prodectNum[i].textContent,
            });
        };
        jsCartList.innerHTML = '';
        jsCartOrderContainer.classList.add('hidden');
        jsCartEmptyContainer.classList.remove('hidden');
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ваша заявка принята.",
            showConfirmButton: false,
            timer: 1500
          });
    }
});

document.querySelector('.orderName').addEventListener('keyup', () => {
    document.querySelector('.orderName').classList.remove('orderNameBorder');
    document.querySelector('.orderName').classList.add('orderNameAdd');
    if (document.querySelector('.orderName').value == '') {
        document.querySelector('.orderName').classList.remove('orderNameAdd');
        document.querySelector('.orderName').classList.add('orderNameBorder');

    }

});
document.querySelector('.orderTelefon').addEventListener('keyup', () => {
    document.querySelector('.orderTelefon').classList.remove('orderNameBorder');
    document.querySelector('.orderTelefon').classList.add('orderNameAdd');
    if (document.querySelector('.orderTelefon').value == '') {
        document.querySelector('.orderTelefon').classList.remove('orderNameAdd');
        document.querySelector('.orderTelefon').classList.add('orderNameBorder');

    }
});
