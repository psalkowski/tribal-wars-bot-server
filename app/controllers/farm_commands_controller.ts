import { HttpContext } from '@adonisjs/core/http'
import FarmCommand from '#models/farm_command'

export default class FarmCommandsController {
  async index() {
    return FarmCommand.all()
  }

  async create({ request }: HttpContext) {
    const command = request.all()
    const agent = await request.agent()

    return FarmCommand.create({
      ...command,
      worldId: agent.worldId,
    })
  }
}
