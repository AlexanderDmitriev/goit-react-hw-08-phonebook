const LoginPage = () => {
    const loginMessage=`Please, enter the login information to use the application.`;
    return (
      <>
        <h2>{loginMessage}</h2>
        <form>
        <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Password
        <input type="text" name="password" />
      </label>
        </form>
        
        <button type="submit">Submit</button>
      </>
    );
  };
  
  export default LoginPage;