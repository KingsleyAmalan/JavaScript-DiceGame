const hotel = {
  name: "Temple INN",
  locations: "Trichy",
  Starter: ["Soup", "Panner", "Mushroom"],
  Maincourse: ["Dosa", "Idly", "PodiIdly"],
  order: function (StarterIdex, MainmenuIndex) {
    return [this.Starter[StarterIdex], this.Maincourse[MainmenuIndex]];
  },
  openingHours: {
    mon: { open: "9.00AM", Close: "10.00pm" },
    Tue: { open: "10.00AM", close: "9.00PM" },
  },
};
console.log(hotel.Starter);

let [, y, z] = hotel.Starter;
console.log(y, z);
[y, z] = [z, y];
console.log(y, z);
let [x = 1, a = 5, b, q = 5] = hotel.Maincourse;
console.log(x, a, b, q);
const [Starters, Mainmenu] = hotel.order(0, 2);
console.log(Starters, Mainmenu);

const { name, openingHours, locations } = hotel;
console.log(name, openingHours, locations);

const { name: HotelName, openingHours: WorkingHrs } = hotel;
console.log(HotelName, WorkingHrs);
