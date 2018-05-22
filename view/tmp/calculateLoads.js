const project = {
  _id: 'Objectid(AAAA)',
  name: "Scene 5 Film Shoot",
  user: 'Objectid(<ref to user>)',
  generator: {
    capacity: 2500, //in watts, can be null
  },
  loads: [
    {
      name: "Overhead Lights",
      current: 20,      //in amps
      phase: "single",
      connection: "L1",
      type: "resistive",
    },{
      name: "Industrial Fan",
      current: 50,  //in amps
      phase: "three",
      connection: null,
      type: "inductive",
    }
  ]
}

