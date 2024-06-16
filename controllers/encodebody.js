export function encodebody(req, res) {
    try {
      const { plainstr } = req.body;
      const plainString = plainstr;
      const encodedString = Buffer.from(plainString, "utf-8").toString("base64");
  
      console.log("Base64 Encoded:", encodedString);
      return res.json({
        encodedString,
      });
    } catch (error) {
      console.log("error occurred in encodebody function:", error);
      return res.json({
        message: error.message, 
      });
    }
  }
  