class Character {
    constructor(name, level, classe, subclasse, race, speed, ac, hp, initiative, attributes, skills, weapons, abilities, spells) {
      
      this.name = name;
      this.level = level;
      this.classe = classe;
      this.subclasse = subclasse;
      this.race = race;
      this.speed = speed;
      this.ac = ac;
      this.hp = hp;
      this.attributes = attributes;
      this.str_value = attributes[0];
      this.dex_value = attributes[1];
      this.con_value = attributes[2];
      this.int_value = attributes[3];
      this.wis_value = attributes[4];
      this.cha_value = attributes[5];
      this.str_bonus = Math.floor((attributes[0]/2)-5);
      this.dex_bonus = Math.floor((attributes[1]/2)-5);
      this.con_bonus = Math.floor((attributes[2]/2)-5);
      this.int_bonus = Math.floor((attributes[3]/2)-5);
      this.wis_bonus = Math.floor((attributes[4]/2)-5);
      this.cha_bonus = Math.floor((attributes[5]/2)-5);
      this.initiative = initiative;
      this.proficiency = (Math.ceil((level/4) + 1))
      this.skills = skills;
      this.athletics = this.str_bonus + (this.skills[0] ? this.proficiency : 0);
      this.acrobatics = this.dex_bonus + (this.skills[1] ? this.proficiency : 0);
      this.slightofhand = this.dex_bonus + (this.skills[2] ? this.proficiency : 0);
      this.stealth = this.dex_bonus + (this.skills[3] ? this.proficiency : 0);
      this.arcana = this.int_bonus + (this.skills[4] ? this.proficiency : 0);
      this.history = this.int_bonus + (this.skills[5] ? this.proficiency : 0);
      this.investigation = this.int_bonus + (this.skills[6] ? this.proficiency : 0);
      this.nature = this.int_bonus + (this.skills[7] ? this.proficiency : 0);
      this.religion = this.int_bonus + (this.skills[8] ? this.proficiency : 0);
      this.animalhandling = this.wis_bonus + (this.skills[9] ? this.proficiency : 0);
      this.insight = this.wis_bonus + (this.skills[10] ? this.proficiency : 0);
      this.medicine = this.wis_bonus + (this.skills[11] ? this.proficiency : 0);
      this.perception = this.wis_bonus + (this.skills[12] ? this.proficiency : 0);
      this.survival = this.wis_bonus + (this.skills[13] ? this.proficiency : 0);
      this.deception = this.cha_bonus + (this.skills[14] ? this.proficiency : 0);
      this.intimidation = this.cha_bonus + (this.skills[15] ? this.proficiency : 0);
      this.performance = this.cha_bonus + (this.skills[16] ? this.proficiency : 0);
      this.persuasion = this.cha_bonus + (this.skills[17] ? this.proficiency : 0);
      this.passive_perception = (this.perception + 10);
      this.passive_investigation = (this.investigation + 10);
      this.weapons = weapons;
      this.abilities = abilities;
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
        initiative: this.initiative,
        passive_perception: this.passive_perception,
        passive_investigation: this.passive_investigation,
        attribute_scores: {
          str_value: this.str_value,
          dex_value: this.dex_value,
          con_value: this.con_value,
          int_value: this.int_value,
          wis_value: this.wis_value,
          cha_value: this.cha_value,
        },
        attribute_bonuses:{
          str_bonus: this.str_bonus,
          dex_bonus: this.dex_bonus,
          con_bonus: this.con_bonus,
          int_bonus: this.int_bonus,
          wis_bonus: this.wis_bonus,
          cha_bonus: this.cha_bonus,
        },
        proficiency: this.proficiency,
        skills: {
        athletics: this.athletics,
        acrobactics: this.acrobatics,
        slightofhand: this.slightofhand,
        stealth: this.stealth,
        arcana: this.arcana,
        history: this.history,
        investigation: this.investigation,
        nature: this.nature,
        religion: this.religion,
        animalhandling: this.animalhandling,
        insight: this.insight,
        medicine: this.medicine,
        perception: this.perception,
        survival: this.survival,
        deception: this.deception,
        intimidation: this.intimidation,
        performance: this.performance,
        persuasion: this.persuasion
        },
        weapons: this.weapons,
        abilities: this.abilities,
        spells: this.spells
      };
    }

    save() {
        
      const char_data = JSON.stringify(this.toJSON());
      localStorage.setItem('personagem', char_data);

    }
  }
  
  // Creating a new instance of the Chararcter class
  const myChar = new Character('Sigmar',5,'Paladino','Vingança','Humano',9,18,12,0,[18,12,18,10,16,18],[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],'Espada','Golpe divino','Resistência a fogo');
  
  // Convert myChar object to JSON
  const personagem = JSON.stringify(myChar);
  myChar.save()