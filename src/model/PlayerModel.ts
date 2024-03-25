interface PlayerModelProps {
  name: string
  hp: number
  img: string
}
export 
class PlayerModel {
  public name: string
  public hp: number
  public img: string

  constructor(props: PlayerModelProps) {
    const { name, hp, img } = props
    this.name = name
    this.hp = hp
    this.img = img
  }

  changeHP(damage: number) {
    this.hp -= damage
    if (this.hp <= 0) {
      this.hp = 0
    }
  }

  getHP() {
    return this.hp
  }
}
