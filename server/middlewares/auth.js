import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: 'Not Authorized Login Again' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = tokenDecode.id;
    next();
  } catch (error) {
    console.log(error); // jwt malformed / expired / invalid
    res.json({ success: false, message: 'Invalid Token' });
  }
};

export default userAuth