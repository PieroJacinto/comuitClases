const json = `{
  "character": {
    "name": "Aria the Brave",
    "class": "Warrior",
    "level": 10,
    "hp": 120,
    "mana": 50,
    "equipment": {
      "weapon": {
        "name": "Flaming Sword",
        "damage": 35,
        "element": "Fire"
      },
      "armor": {
        "name": "Dragon Scale Shield",
        "defense": 50
      }
    },
    "inventory": [
      { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
      { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
      {
        "item": "Mystic Gem",
        "type": "Artifact",
        "effect": "Boosts magic power"
      }
    ],
    "quests": [
      { "name": "Slay the Dragon", "status": "Completed" },
      { "name": "Find the Lost Amulet", "status": "In Progress" },
      { "name": "piero", "status": "In Progress" }
    ]
  }
}`;

const jsonObj = JSON.parse(json);
// console.log(jsonObj);

const nombre = jsonObj.character.name;
console.log(nombre)

const clase = jsonObj.character.class;
console.log(clase)  


const nivel = jsonObj.character.level;
console.log(nivel) 

const inventario = jsonObj.character.inventory;
// console.log(inventario)

inventario.forEach((itemObjeto)=> {
  console.log(`nombre: ${itemObjeto.item}, efecto: ${itemObjeto.effect}`);  
})

const quests = jsonObj.character.quests;
console.log(quests)

const questsEnProgreso = quests.filter(
  (quest) => quest.status === "In Progress"
);
console.log(questsEnProgreso);

questsEnProgreso.forEach((quest) => {
  console.log(`Nombre: ${quest.name} - Estado: ${quest.status}`);
});
