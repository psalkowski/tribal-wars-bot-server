import type { HttpContext } from '@adonisjs/core/http'
import BattleReport from '#models/battle_report'

export default class BattleReportsController {
  index() {
    return BattleReport.all()
  }

  create({ request }: HttpContext) {
    const data = request.all()

    return BattleReport.firstOrCreate({ id: data.id }, data)
  }
}
