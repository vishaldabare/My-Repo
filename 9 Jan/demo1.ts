let arrobj=[
    {
        id:1,
        fname:"Vishal",
        lname:"Dabare",
        country:{
            cid:11,
            cname:"India",
        },
        month:["jan" , "feb" , "march"],
        result:[
            {
                sub:"maths",
                marks:99,
                percent:97
            }
        ]
    },

    {
        id:2,
        fname:"Anshu",
        lname:"Dabare",
        country:{
            cid:22,
            cname:"America"
        },
        month:["april" , "may" , "june"],
        result:[
            {
                sub:"maths",
                marks:95,            
                percent:94
            }
        ]
    },

    {
        id:3,
        fname:"Umang",
        lname:"Dabare",
        country:{
            cid:33,
            cname:"Switzerland"
        },
        month:["july" , "august" , "sept"],
        result:[
            {
                sub:"maths",
                marks:90,
                percent:88
            }
        ]

    }
]

// for(let i=0; i<arrobj.length; i++){
//     console.log(`
// id           :: ${arrobj[i].id}
// fname        :: ${arrobj[i].fname}
// lname        :: ${arrobj[i].lname}
// Month        :: ${arrobj[i].month} 
// country ID   :: ${arrobj[i].country.cid}
// country Name :: ${arrobj[i].country.cname}
// ==================RESULTS=================
//     `)
//     for(let j=0; j<arrobj[i].result.length; j++){
//         console.log(`
//         Subject  :: ${arrobj[i].result[j].sub}
//         marks    :: ${arrobj[i].result[j].marks}
//         Perscent :: ${arrobj[i].result[j].percent}
//         `)
//     }
    
// }

arrobj.forEach((myvalue)=>{
    console.log(`
id           :: ${myvalue.id}
fname        :: ${myvalue.fname}
lname        :: ${myvalue.lname}
Month        :: ${myvalue.month} 
country ID   :: ${myvalue.country.cid}
country Name :: ${myvalue.country.cname}
==================RESULTS=================
    `)
    myvalue.result.forEach((nextvalue)=>{
console.log(`
Subject  :: ${nextvalue.sub}
marks    :: ${nextvalue.marks}
Perscent :: ${nextvalue.percent}
         `)
    })
    
})