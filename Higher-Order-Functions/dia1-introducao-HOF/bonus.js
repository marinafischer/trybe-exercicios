const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = (dragon) => {
  const danoMin = 15;
  const danoMax = dragon.strength;
  return dragon.damage = Math.floor(Math.random() * ( danoMax-danoMin + 1 ) + danoMin);
}  

const danoWarrior = (warrior) => {
  const danoMin = warrior.strength;
  const danoMax = warrior.strength*warrior.weaponDmg;
  return warrior.damage = Math.floor(Math.random() * ( danoMax-danoMin + 1 )+ danoMin);
}
danoWarrior(warrior)
danoDragao(dragon);
console.log(dragon.damage, warrior.damage)