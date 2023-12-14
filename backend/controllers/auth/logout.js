import User from '../../models/User.js';

export const logout = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: id } = req.user;

  const user = await User.findById(id);
  const updated = await User.findByIdAndUpdate(user._id, { token: null }, { new: true });

    // GENERATE RESPONSE
    res.status(200).json({
      message: 'Logout successfully',
      updated
    });
};