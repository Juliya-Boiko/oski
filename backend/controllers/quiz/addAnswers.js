import Answer from "../../models/Answer.js";

export const addAnswers = async (req, res) => {
  // CREATE NEW
  await Answer.create(req.body);

  // GENERATE RESPONSE
  res.status(201).json({
    message: "Answers added successfully"
  });
};