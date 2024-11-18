const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model"); 

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
 
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log(
      user
    )

    return res.json({ message: "Login successful", token, email: user.email });
  } catch (e) {
    console.error("Error during login:", e);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { userLogin };
