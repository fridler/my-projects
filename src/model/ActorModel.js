class ActorModel {
    constructor(plainActor, lname, birthday, deathDay, img, imdb, id) {
        if (typeof plainActor === 'object') {
            this.fname = plainActor.fname;
            this.lname = plainActor.lname;
            this.birthday = plainActor.birthday;
            this.deathDay = plainActor.deathDay;
            this.img = plainActor.img;
            this.imdb = plainActor.imdb;
            this.id = plainActor.id;
        } else {
            this.fname = plainActor;
            this.lname = lname;
            this.birthday = birthday;
            this.deathDay = deathDay;
            this.img = img;
            this.imdb = imdb;
            this.id = id;
        }
        this.age = this.getAge(this.birthday, this.deathDay);
    }

    getAge(dateString, deadString) {
        const today = deadString ? new Date(deadString) : new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
export default ActorModel