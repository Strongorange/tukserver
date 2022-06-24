import User from "../models/User";

export const postSignup = async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  console.log(exists);
  if (exists) {
    return res.status(400).send("username, email exist");
  }
  try {
    //
    await User.create({
      username,
      password,
      email,
    });
    res.status(200).send("GOOD");
  } catch {
    //
    res.status(400).send("error");
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ $and: [{ username }, { password }] });
  console.log(exists);
  if (exists) {
    return res.status(200).send("good");
  } else {
    return res.status(201).send("error");
  }
};
