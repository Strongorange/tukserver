import User from "../models/User";
import { fStorage } from "../firebase";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

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
      top: [{}],
      bottom: [{}],
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
  const userObj = await User.findById(exists._id);
  console.log(userObj);
  if (exists) {
    return res.status(200).send(userObj);
  } else {
    return res.status(201).send("error");
  }
};

export const postPhoto = async (req, res) => {
  const { base64: uri, id, isTop } = req.body;
  const storageRef = ref(
    fStorage,
    `${id}/${isTop ? "top" : "bottom"}/${Date.now()}.jpg`
  );
  console.log(uri, id, isTop);

  uploadString(storageRef, uri, "base64", {
    contentType: "image/jpeg",
  }).then((snapshot) => console.log("success!!"));

  res.send("Photo Upload well");
};
