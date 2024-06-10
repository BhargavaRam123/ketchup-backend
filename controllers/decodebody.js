export function decodebody(req, res) {
  try {
    const { encodedstr } = req.body;
    const base64String = encodedstr;
    const decodedString = Buffer.from(base64String, "base64").toString("utf-8");

    console.log("Base64 Decoded:", decodedString);
    return res.json({
      decodedString,
    });
  } catch (error) {
    console.log("error occured in decodebody function:", error);
    return res.json({
      message: error,
    });
  }
}
