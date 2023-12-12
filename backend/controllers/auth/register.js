import User from '../../models/User.js';
import { hashPassword } from '../../utils/bcrypt.js';
import { generateToken } from '../../utils/jwt.js';

export const register = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { email, password } = req.body;

  // CHECK IF ALREADY REGISTERED
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({
      message: 'Email in use'
    })
  } else {
    // HASH PASSWORD & CREATE TOKEN
    const hash = hashPassword(password);
    await User.create({ email, password: hash });
    const registeredUser = await User.findOne({ email });
    const payload = {
      id: registeredUser._id,
    };
    const token = generateToken(payload);
    
    // GENERATE RESPONSE
    res.status(201).json({
      message: 'Registered successfully',
      token
    });
  }
  
};