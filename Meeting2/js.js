function randomN(n)
{
    for(let i=1; i<=n;i++)
    {
        console.log(i);
    }
}

function SimpleSearch(n)
{
    
    for(let i = 2; i<n; i++)
    {
        if(n%i===0)
            return false;
    }
    
    return true;
}

function PrintSimple(n)
{
    for(let i =1; i<n;i++)
    {
        if(SimpleSearch(i))
            console.log(i);
    }
}

function Print_K(n,k)
{
    for(let i=1;i<=n; i++)
    {
        if(i%k===0)
            console.log(i);
    }
}

function SimpleUntil()
{
    let num = prompt("Enter - N");
    let ans = confirm("Next Simple?");

    for(let i =1; i<=num && ans; i++)
    {
        if(SimpleSearch(i))
        {
            console.log(i)
            ans = confirm("Next Simple?")
        }
    }

    console.log("STOP");
}

function calc_time(speed, slowdown, mine)
{
    let speed_hour = speed - slowdown;
    console.log( mine/speed_hour + " hours");

}

function calc_visitors(n)
{   //эту формулу я выводила
    console.log((((1+Math.sqrt(1+8*n))/2) - 1) + " visitors");
}



//----Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
console.log("1 task \n ------------------------\n")
randomN(prompt("task 1| Enter - N"));
console.log("\n");

//----Вывести в консоль простые числа от 1 до n.
console.log("2 task \n ------------------------\n")
PrintSimple(prompt("task 2| Enter - N"));
console.log("\n");

//----Вывести в консоль числа кратные k, в диапазоне от 1 до n.
console.log("3 task \n ------------------------\n")
Print_K(prompt("task 3| Enter - N"), prompt("task 3| Enter - K"));
console.log("\n");

//----Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.
console.log("5 task \n ------------------------\n");
SimpleUntil();


//----BIG TASK 1.---------
console.log("BIG TASK 1 \n ------------------------\n");
confirm("TASK 1 - enter 3 numbers");
calc_time(prompt(" Enter speed"),prompt(" Enter slowdown"), prompt(" Enter mine")); 

//-----BIG TASK2----------
console.log("BIG TASK 1 \n ------------------------\n");
calc_visitors(prompt("Enter number of handshakes"));
