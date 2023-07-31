// public, private, protected, readonly

class Monster {
    // power = 10                      => public, private, protected, readonly 중 한개라도 있으면 생략가능

    constructor(public power: any) {
        // this.power = power          => public, private, protected, readonly 중 한개라도 있으면 생략가능
    }

    attack = () => {
        console.log("공격하지!!")
        console.log("내 공격력은 " + this.power + "야!!")
    }
}

class WingMonster extends Monster {
    attack2 = () => {
        console.log("날라서 공격하지!!")
        console.log("내 공격력은 " + this.power + "야!!")
    }
}

const myMonster2 = new WingMonster(20)
myMonster2.attack()
myMonster2.attack2()
console.log(myMonster2.power)
myMonster2.power = 10