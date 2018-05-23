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

function calculateLoads(project) {
	let genLoad = [0,0,0];
	for (i in project.loads) {
		let ampsAdded = [0,0,0];
		let load = project.loads[i];
		if (load.phase=='single') {
			switch (load.connection) {
				case('L1'):
					ampsAdded[0]=load.current;
					break;
				case('L2'):
					ampsAdded[1]=load.current;
					break;
				case('L3'):
					ampsAdded[2]=load.current;
					break;
			}
		} else { //it's 3-phase
			ampsAdded = [load.current/3,load.current/3,load.current/3];
		}	
		//Multiply by PF constant if inductive load
		if (load.type=='inductive') {
			ampsAdded = ampsAdded.map(x => 0.8*x);
		}
		for (i in genLoad) {
			genLoad[i]+=ampsAdded[i];
		}
	}
	return genLoad;
}

console.log(calculateLoads(project));
