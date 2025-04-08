import jwt from "jsonwebtoken";

const Authorization = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized. Token missing." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Store user info in req
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid or expired token" });
  }
};

export {Authorization};
