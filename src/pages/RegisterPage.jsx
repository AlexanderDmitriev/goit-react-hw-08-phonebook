const RegisterPage = () => {
    const registrationMessage=`Please, fill out the registration form to use the application.`;
    return (
      <>
        <h2>{registrationMessage}</h2>
        <form>
        <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
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
  
  export default RegisterPage;