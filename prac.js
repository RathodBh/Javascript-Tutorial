
const fun2 = () => {
    setTimeout(() => {
        console.log("fun2")
    }, 2000);
    console.log("f2")
}

const fun = () => {
    console.log("fun1")
    fun2()
    console.log("fun1 again")
}

fun();
// fun1
// f2
// fun1 again
// fun2