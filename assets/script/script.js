let i = 0
    const x = setInterval(func, 28)
    function func(){  
        if (i<=70) {
            document.getElementById('demo').innerHTML=i+'%'
            i++
        }else {
            clearInterval(x)
        }
    }