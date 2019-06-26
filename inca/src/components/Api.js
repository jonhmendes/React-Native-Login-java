export default (api = {
    getUser: (email, password) => {
      return fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
    },
  
    createUser: (email, password) => {
      console.log("in here");
      return fetch("http://YOUR IP ADDRESS:PORT/api/v1/createUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
    }
  });
  