const user = {
            
}


for (let i = 0; i < 10; i++) {
    user.name = prompt("Ismingizni kiriting")
    user.age = +prompt("Yoshingizni kiriting")
    while(isNaN(user.age) || user.age==0){
        age = +prompt("Xato! Qaytadan urinib ko'ring")
    }
    
    console.log(
    `User ${i+1}
    Sizning ismingiz: ${user.name}
    Yoshingiz: ${user.age} da`);
    
}






    




