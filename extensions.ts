import { Request } from '@adonisjs/core/http'
import Agent from '#models/agent'

Request.macro('agent', function (this: Request) {
  const name = this.header('X-Agent', 'anonymous')

  if (!name) {
    return null
  }

  return Agent.findBy({ name })
} as any)

declare module '@adonisjs/core/http' {
  interface Request {
    agent(): Promise<Agent>
  }
}
