const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};
otoniel = person();
console.log(otoniel.getName());
otoniel.setName("Otoniel Andrade");
console.log(otoniel.getName());
