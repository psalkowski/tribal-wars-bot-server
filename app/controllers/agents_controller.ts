import { HttpContext } from '@adonisjs/core/http'
import Agent from '#models/agent'
import World from '#models/world'
import { DateTime } from 'luxon'

export default class AgentsController {
  async index({ request }: HttpContext) {
    const name = request.header('X-Agent', 'anonymous')

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
        running: true,
        startedAt: DateTime.now(),
      }
    )

    if (!agent.startedAt) {
      agent.running = true
      agent.startedAt = DateTime.now()
    }

    await agent.related('world').associate(world)

    return agent.save()
  }

  async start({ request }: HttpContext) {
    const agent = await request.agent()

    agent.startedAt = DateTime.now()
    agent.running = true

    return agent.save()
  }

  async stop({ request }: HttpContext) {
    const agent = await request.agent()

    agent.startedAt = null
    agent.running = false

    return agent.save()
  }
}
