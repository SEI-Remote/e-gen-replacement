import { Router } from 'express'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export { router }
