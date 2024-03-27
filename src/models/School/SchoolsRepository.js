export default class SchoolsRepository {
    constructor() {
      this.schools = [];
    }
  
    getAll() {
      return this.schools;
    }
  
    get(id) {
      return this.schools.find((school) => school.id === id);
    }
  
    add(school) {
      console.log("Recebendo?", school);
      this.schools.push(school);
      console.log("Lista atualizada", this.schools)
    }
  
    remove(id) {
      this.schools = this.schools.filter((school) => school.id !== id);
    }
  
    update(id, name, email, fondation, workers, classes, addres, phone, ceo) {
      const school = this.get(id);
  
      if (school) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.fondation = fondation;
        this.workers = workers;
        this.classes = classes;
        this.addres = addres;
        this.phone = phone;
        this.ceo = ceo;
      }
      return school;
    }
  }