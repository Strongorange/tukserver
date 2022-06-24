let topAngleServer;
let bottomAngleServer;

export const sendData = async (req, res) => {
  console.log("data sent to Arduino");
  res.status(200);
  res.send("server send data");
};

export const getData = async (req, res) => {
  console.log(req.body);
  console.log("good");
  /*
  topAngleServer = req.body.topAngle;
  bottomAngleServer = req.body.bottomAngle;
   */
  res.status(200);
  res.send("server get data");
};
