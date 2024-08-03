/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const FarmCommandsController = () => import('#controllers/farm_commands_controller')
const AgentsController = () => import('#controllers/agents_controller')
const BattleReportsController = () => import('#controllers/battle_reports_controller')

router
  .group(() => {
    router.get('agent', [AgentsController, 'index'])
    router.post('agent', [AgentsController, 'register'])

    router.get('farm-command', [FarmCommandsController, 'index'])
    router.post('farm-command', [FarmCommandsController, 'create'])

    router.get('battle-report', [BattleReportsController, 'index'])
    router.post('battle-report', [BattleReportsController, 'create'])
  })
  .prefix('/api')
