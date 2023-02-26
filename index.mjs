

let bladata = 
    {
 "services": [
 {
 "name": "License service",
 "state": "ok",
 "updated": "2023-02-14T09:17:00Z",
 "aws_region": "eu-west-1"
 }, {
 "name": "License service",
 "state": "alarm",
 "updated": "2023-02-14T09:00:00Z",
 "aws_region": "ap-northeast-1"
 }, {
 "name": "License service",
 "state": "failure",
 "updated": "2023-02-14T09:20:00Z",
 "aws_region": "us-east-1"
 },{
 "name": "ESG service",
 "state": "ok",
 "updated": "2023-02-14T09:17:00Z",
 "aws_region": "ap-northeast-1"
 }
 ]
}


export const handler = async(event) => {
    // TODO implement
    
    console.log("Lambda function is working")
    
    if(event.httpMethod==='GET')
    {
       return getBlaservicesdata(event);
    }
    
    if(event.httpMethod === 'POST')
    {
         return createBlaservicesdata(event);
    }
   
};

function getBlaservicesdata(event){
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            
        services_details : bladata
    })
    };
    return response;
}

function createBlaservicesdata(event) {
     const body = JSON.parse(event.body);
     const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: "succesfully created",
        details: body
         })
     };
    
    return response;
}

    
  
