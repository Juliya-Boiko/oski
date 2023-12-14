import Answer from "../../models/Answer.js";

export const addAnswers = async (req, res) => {
  // GET VALUES FROM REQUEST
  // const { name } = req.body;

  // CREATE NEW
  const data = await Answer.create(req.body);

  // GENERATE RESPONSE
  res.status(201).json({
    data
  });
};