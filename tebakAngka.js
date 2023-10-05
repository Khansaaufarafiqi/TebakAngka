let ulangi = true;

while (ulangi){
    let kesempatan = 3; //buat let untuk memberikan kesempatan
    let data = Math.floor(Math.random() * 10) + 1;
    // Math.floor() adalah sebuah fungsi untuk memberikan nilai desimal bulat palinf deakt "jika 5.3 = 5"
    // Math.random() adalah memberikan nilai randem "bulat"
    let hasil = "";
    while (kesempatan){
        alert("Kita memberikan anda ' " + kesempatan + " ' kesempatan");
        let input = parseInt(prompt(" Tebak angkanya muali dari ' 1 - 10 '"));
        
        if (input === data){
            hasil = " BETUL <3 <3 <3"
            alert("KAMU ' " + hasil + " ' angka yang kamu tebak tadi " + data);
            break;
        }else if (input < data){
            hasil = " KECILAN BANG..."
            kesempatan -= 1;
            alert("TERLALU KE " + hasil + " TEBAKKANMU TADI " + input + " \nTINGGAL " + kesempatan + " KESEMPATAN TERSISA");
        }else if ( input > data){
            hasil = " KEBESARAN BANG..."
            kesempatan -= 1;
            alert("KAMU " + hasil + " TEBAKKANMU TADI " + input + " \nTINGGAL " + kesempatan + " KESEMPATAN");
        }
        if (kesempatan === 0){
            alert("kesempatanmu habis ya haha \n angka yang benar tadi   " + data );
        }
    } ulangi = confirm("Mau Mengulangi Lagi ?");

}
alert("Trima Kasih sudah mencoba");