import { UIComponent } from '../component'
import { PlayerModel } from '../model'

export class PlayerController {
  private playerModel: PlayerModel;
  private view: UIComponent;
  constructor(playerModel: PlayerModel, view: UIComponent) {
    this.playerModel = playerModel
    this.view = view
  }

  changeHP(damge: number) {
    this.playerModel.changeHP(damge)
    this.view.renderHP(this.playerModel.getHP())
  }

  createPlayer() {
    this.view.createPlayer(this.playerModel)
  }
}
