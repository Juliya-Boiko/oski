import User from '../../models/User.js';
import { hashPassword, comparePasswords } from '../../utils/bcrypt.js';
import { generateToken } from '../../utils/jwt.js';

export const sign = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { email, password } = req.body;

  // CHECK IF ALREADY REGISTERED
  const user = await User.findOne({ email });

  if (user) {
    // LOGIN USER
    const compare = comparePasswords(password, user.password);
    if (compare) {
      const payload = { id: user._id,};
      const token = generateToken(payload);
      await User.findByIdAndUpdate(user._id, { token }, { new: true });
      res.status(200).json({
        data: { token }
      });
    } else {
      res.status(401).json({
        message: 'Password is wrong'
      })
    }
  } else {
    // REGISTER USER
    const hash = hashPassword(password);
    await User.create({ email, password: hash });
    const registeredUser = await User.findOne({ email });
    const payload = {
      id: registeredUser._id,
    };
    const token = generateToken(payload);
    await User.findByIdAndUpdate(registeredUser._id, { token }, { new: true });
    
    // GENERATE RESPONSE
    res.status(201).json({
      data: { token }
    });
  }
};