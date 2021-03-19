let userDetails = {
    firstName: "Praneeth",
    secondName: "M",
    age: 22,
    dob: "1999/03/14",
    isValid: true 
};


//console.log(userDetails.Age);
const {firstName} = userDetails;
const {secondName} = userDetails;
const {age} = userDetails;
const {dob} = userDetails;
const {isValid} = userDetails;
//console.log(fname);
//const details = {userDetails.FirstName,userDetails.SecondName,userDetails.Age,userDetails.DOB,userDetails.isValid};
// validate_Details(userDetails);
/* 
function validate_Details(user_Details)
{
    const {firstName,secondName,age,dob} = userDetails;
    console.log(typeof(firstName))
    if(typeof(firstName)!= 'string' || !firstName)
    {
            console.log("Invalid");
    }
    if(typeof(age)!='number')
        console.log("Invalid");
    if()
    {
        var a = moment(dob).isValid();
    }

    isValid = true;




} */




let users = [];

function create(item = {}){
    try {
        let { firstName,secondName,dob,age } = item;

        if(!firstName || !secondName || !dob || !age){
            throw new Error("Invalid Fields")
        }

        firstName = firstName.toUpperCase();
        secondName = secondName.toUpperCase();
    
        if(age<=0){
            throw new Error("age value is invalid")
        }

        users.push({firstName,secondName,dob,age});

    } catch (error) {
        throw error;
    }
}

create(userDetails);
create(userDetails);


console.log(users.length)