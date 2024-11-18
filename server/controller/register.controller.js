const argon2 = require("argon2");
const User = require("../model/user.model"); 

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
   
    const hashedPassword = await argon2.hash(password);

 
    let user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user)

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
  
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ message: "Email already exists, please use a different one." });
    }

    return res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser };
