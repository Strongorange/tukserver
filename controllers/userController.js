import User from "../models/User";
import { fStorage } from "../firebase";
import { getStorage, ref, uploadString } from "firebase/storage";

function wait(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

export const updateUser = async (req, res) => {
  const { userInfo } = req.body;
  console.log("User Info \n\n", userInfo);
  const exists = await User.exists({ _id: userInfo._id });
  if (exists) {
    try {
      const data = await User.findByIdAndUpdate(
        exists._id,
        {
          $set: { top: userInfo.top, bottom: userInfo.bottom },
        },
        { new: true }
      );
      console.log("updated \n\n\n", data);
      console.log("update!");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

  res.send("good");
};

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
  if (exists) {
    const userObj = await User.findById(exists._id);
    return res.status(200).send(userObj);
  } else {
    return res.status(201).send("error");
  }
};

export const postPhoto = async (req, res) => {
  const { id, isTop, range, url, clothIndex } = req.body;

  // console.log(uri, id, isTop);

  let updated;
  if (isTop) {
    updated = await User.findByIdAndUpdate(
      id,
      {
        $push: {
          top: {
            uri: url,
            isTop,
            rating: 0,
            season: "summer",
            range,
            clothIndex,
          },
        },
      },
      { new: true }
    );
  } else if (!isTop) {
    updated = await User.findByIdAndUpdate(
      id,
      {
        $push: {
          bottom: {
            uri: url,
            isTop,
            rating: 0,
            season: "summer",
            range,
            clothIndex,
          },
        },
      },
      { new: true }
    );
  }
  res.send(updated);
};

export const getUserFromDB = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const exists = await User.exists({ _id: id });
  if (exists) {
    const userObj = await User.findById(id);
    res.send(userObj).status(200);
  } else {
    console.log("can't find user");
    res.send("can't find user");
  }
};
