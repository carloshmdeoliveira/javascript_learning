{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera) // Será???
            }
        }
    }
}

console.log(sera) // Será???

function teste() {
    var local = 123
    console.log(local)
}

teste () // 123
// console.log(local) ~ Se tratando de um escopo não global, não é possível chamar o console