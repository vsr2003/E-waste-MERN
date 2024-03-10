
exports.ContactusMailTemplate = (contactusData)  =>
{
    return `
    <div>
        <p>This Person contacted</p>
        <br/>
        <br/>

        <p>Name : ${contactusData.name} </p>
        <p>Email : ${contactusData.email} </p>
        <p>Message :  ${contactusData.message} </p>
        <p>Phone : ${contactusData.phone} </p>

        <br/>
        <br/>
        
    </div>
    `
}
