import jwt from "jsonwebtoken"
import logger from "../config/logger.js"

export const sign = async (payload, expiresIn, secret) => {
  // make this process asynchronous
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn }, (error, token) => {
      if (error) {
        logger.error(error)
        reject(error)
      } else {
        resolve(token)
      }
    })
  })
}
