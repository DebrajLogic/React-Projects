const CustomLogin = () => {
    const backgroundStyle = {
      backgroundImage: 'url("../assets/Blog.png")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100vh",
      width: "100%",
    };
  
    return (
      <div style={backgroundStyle} className="flex items-center justify-center">
        <div className="border-2 border-red-500 bg-opacity-50 rounded-lg transition duration-300 hover:shadow-xl">
          <div className="p-8">
            <h2 className="text-center text-4xl font-bold text-white mb-8">
              Sign In
            </h2>
            <div className="input-box mb-8">
              <span className="icon">
                <i className="bx bxs-envelope text-white"></i>
              </span>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b-2 border-white outline-none text-white"
              />
              <label className="text-white">Email</label>
            </div>
            <div className="input-box mb-8">
              <span className="icon">
                <i className="bx bxs-lock-alt text-white"></i>
              </span>
              <input
                type="password"
                required
                className="w-full bg-transparent border-b-2 border-white outline-none text-white"
              />
              <label className="text-white">Password</label>
            </div>
            <div className="remember-password flex justify-between items-center mb-6">
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-white hover:text-red-500">
                Forgot Password
              </a>
            </div>
            <button className="btn">Login</button>
            <div className="create-account text-center mt-8">
              <p className="text-white">
                Create an account?{" "}
                <a href="#" className="font-semibold hover:text-red-500">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomLogin;
  