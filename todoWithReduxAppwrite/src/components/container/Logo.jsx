function Logo({ width = "100px" }) {
    return (
      <div className="h-14 w-20 p-2 flex align-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmNsCb0wbG2npQN9OiO3cjH3Xl5Y0YJavvbROFeVni9IITWoUtuWO2u04syu2wCoTGII&usqp=CAU"
          alt=""
        />
        <img
          className="ml-4 h-10 object-contain"
          src="src/assets/Blog.png"
          alt=""
        />
      </div>
    );
  }
  
  export default Logo;
  