const express = require("express");

const app = express();

var users = [
    {
        name:'Onkar',
        kidneys:[{
            health: false
        },
        {
            health:true 
        }]
    }
]

function sum(n){
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.use(express.json());

app.get("/",function(req,res){
    const myKidnies = users[0].kidneys;
    const num = myKidnies.length;
    let healthy = 0;
    for(let i = 0 ; i < myKidnies.length ; ++i){
        if(myKidnies[i].health){
            healthy += 1;
        }
    }
    const unHealthy = num - healthy;

    res.json({
        num,healthy,unHealthy
    })
})



app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        health:isHealthy
    })

    res.json({
        mes : "Update Done"
    })
})

app.put("/",function(req,res){
    for(let i = 0 ; i < users[0].kidneys.length ;++i){
        users[0].kidneys[i].health = true;
    }

    res.json({
        mess : "Reset all healthy kiydiynes"
    })
})


app.delete("/",function(req,res){
    const newKid = [];
    for(let i = 0 ; i < users[0].kidneys.length ; ++i){
        if(users[0].kidneys[i].health){
            newKid.push({
                health : true
            })
        }
    }

    users[0].kidneys = newKid;
    res.json({
        mess : "Unhealthy kidneyes are deleted "
    })
})


app.listen(3000);