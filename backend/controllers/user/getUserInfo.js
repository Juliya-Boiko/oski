import User from '../../models/User.js';

export const getUserInfo = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: id } = req.user;

  const { token, marks } = await User.findById(id);

  // GENERATE RESPONSE
  res.status(200).json({
    data: {
      token, marks 
    },
  });
};