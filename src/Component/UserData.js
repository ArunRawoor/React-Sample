import React , {useState , useEffect} from "react" ; 


const UserData  = () => {

      const [users , setUsers] = useState([]);

      useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log("Error  fetching data:" , error));
      }, []);  

      return(
        <div>

            <h2>User Data </h2>
            <ul>
                {users.map((Asdf) => (
                    <li key={Asdf.id}>{Asdf.name}<br></br>{Asdf.email}<br></br>{Asdf.phone}<br></br>{Asdf.website }</li>
                ))}
            </ul>
        </div>
      );
         
};


export default UserData;

