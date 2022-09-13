import * as soap from 'soap';

const username = "";
const password = "";
const wsdlUrl = 'http://localhost:8080/InControl?WSDL';

const get_version = async () => {
  const client = await soap.createClientAsync(wsdlUrl, { overridePromiseSuffix: 'Request' })
  if (client === undefined) {
    console.error("Failed to connect");
    return;
  }
  client.setSecurity(new soap.BasicAuthSecurity(username, password));

  var description = client.describe();
  //console.log("Client description:", JSON.stringify(description));
    
  console.log("calling soap get_version");
  const a = await client.get_VersionRequest().catch((err:any) => {
    return err.response.statusText || err.message;
  })
  console.log("Got response: ", a);
}

get_version();