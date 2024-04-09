import Logo from "../components/Logo";
const Login = () => {
  return (
    <div className=" bg-background-image min-h-screen bg-contain ">
      <div className="flex flex-col 0">
        <Logo />
        <div>Welcome Back!</div>
        < input className="w-1/4" placeholder="Enter your email" type="email"/>  
        
      </div>

    </div>
  );
}

export default Login;
