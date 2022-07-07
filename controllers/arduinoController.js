let serverClothIndex = 0;
let serverIsTop = 1;

export const sendData = async (req, res) => {
  console.log("data sent to Arduino");
  console.log(
    `serverIstop = ${serverIsTop} serverClothIndex = ${serverClothIndex}`
  );
  res.send(
    JSON.stringify({
      isTop: serverIsTop,
      clothIndex: serverClothIndex,
    })
  );
};

export const fromApp = async (req, res) => {
  console.log("from app");
  console.log(req.params);
  serverClothIndex = req.params.clothIndex;
  serverIsTop = req.params.isTop == "top" ? 1 : 0;
  console.log(
    `serverIstop = ${serverIsTop} serverClothIndex = ${serverClothIndex}`
  );
  res.status(200).send("good");
};
