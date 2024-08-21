 
exports.getSample = async (req, res) => {
 

  try {
    return res.send({message:'Sample sent successfully'});
  } catch (error) {
    return res.status(500).send("Error fetching image");
  }
};