import transmit from '@adonisjs/transmit/services/main'
import { HttpContext } from '@adonisjs/core/http'
import Agent from '#models/agent'
import World from '#models/world'

export default class AgentsController {
  async index({ request }: HttpContext) {
    const name = request.header('X-Agent', 'anonymous')

    transmit.broadcast('my/custom/event', { message: 'Hello', foo: 123 })

    return Agent.findBy({ name })
  }

  async register({ request }: HttpContext) {
    const ip = request.ip()
    const name = request.header('X-Agent', 'anonymous')
    const data = request.all()
    const worldId: string = data.world

    const world = await World.firstOrCreate({ id: worldId })
    const agent: Agent = await Agent.firstOrCreate(
      {
        name,
      },
      {
        ip,
        enabled: true,
        running: false,
      }
    )

    await agent.related('world').associate(world)
    await agent.save()

    return agent
  }
}
