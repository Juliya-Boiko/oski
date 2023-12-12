import User from '../../models/User.js';
import { comparePasswords } from '../../utils/bcrypt.js';
import { generateToken } from '../../utils/jwt.js';

export const login = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { email, password } = req.body;

  // CHECK EMAIL & PASSWORD
  const user = await User.findOne({ email });
  const compare = comparePasswords(password, user.password);

  if (!user || !compare) {
    res.status(401).json({
      message: 'Email or password is wrong'
    })
  } else {
    // CREATE TOKEN
    const payload = { id: user._id,};
    const token = generateToken(payload);

    // GENERATE RESPONSE
    res.status(200).json({
      message: 'Login successfully',
      token
    });
  }
};