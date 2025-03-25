import { action, createStore } from "easy-peasy";

const store = createStore({
  // your store model here
  name: "John Doe",
  age: 30,
  dateOfBirth: "01/01/1990",
  email: "john.doe@example.com",
  phoneNumber: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  country: "USA",
  occupation: "Software Engineer",
  company: "ABC Corp",
  website: "https://www.example.com",
  socialMedia: {
    linkedIn: "https://www.linkedin.com/in/johndoe",
    twitter: "https://www.twitter.com/johndoe",
    facebook: "https://www.facebook.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",
    youtube: "https://www.youtube.com/johndoe",
    github: "https://www.github.com/johndoe",
    pinterest: "https://www.pinterest.com/johndoe",
    tiktok: "https://www.tiktok.com/johndoe",
    snapchat: "https://www.snapchat.com/add/johndoe",
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/johndoe",
    signal: "https://signal.org/johndoe",
  },
  UpdateValues: action((state: any, payload: any) => {
    state = { ...payload };
  }),
});

export default store;
