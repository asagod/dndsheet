class Character {
    constructor(name, level, classe, subclasse, race, speed, ac, hp, attributes, skills, weapons, spells) {
      
      this.name = name;
      this.level = level;
      this.classe = classe;
      this.subclasse = subclasse;
      this.race = race;
      this.speed = speed;
      this.ac = ac;
      this.hp = hp;
      this.attributes = attributes;
      this.proficiency = (Math.ceil((level/4) + 1))
      this.skills = skills;
      this.weapons = weapons;
      this.spells = spells;

    }
  
    level_up() {
      this.level += 1;
    }
  
    toJSON() {
      return {
        name: this.name,
        level: this.level,
        classe: this.classe,
        subclasse: this.subclasse,
        race: this.race,
        speed: this.speed,
        ac: this.ac,
        hp: this.hp,
        attributes: this.attributes,
        proficiency: this.proficiency,
        skills: this.skills,
        weapons: this.weapons,
        spells: this.spells
      };
    }

    save() {
        
        let this_char = {
            name: this.name,
            level: this.level,
            classe: this.classe,
            subclasse: this.subclasse,
            race: this.race,
            speed: this.speed,
            ac: this.ac,
            hp: this.hp,
            attributes: this.attributes,
            proficiency: this.proficiency,
            skills: this.skills,
            weapons: this.weapons,
            spells: this.spells
          }

        localStorage.setItem("personagem", JSON.stringify(this_char))
    }
  }
  
  // Creating a new instance of the Chararcter class
  const myChar = new Character('Sigmar',5,'Paladino','Vingança','Humano',9,18,12,[18,12,18,10,16,18],[2,3,4,5,6,7],'Nenhuma','Nenhum');
  
  // Convert myChar object to JSON
  const personagem = JSON.stringify(myChar);
  myChar.save()