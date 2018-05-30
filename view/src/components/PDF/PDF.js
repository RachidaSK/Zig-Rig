import React from "react";
import "./PDF.css";
import jsPDF from "jspdf";
// import Project from "../../../../models/Project.js";
import BasicGen from "../../pages/BasicGen/BasicGen.js";

// DUMMY Project OBJECT STANDING IN FOR DATABASE OBJECT FOR PDF GENERATOR
const Project = {
    user: {
        username: "Chris Houck"
    },
    name: "Film Shoot",
    loads: [
        {
            name: "10k spotlight",
            current: 10,
            phase: "Single",
            connections: "L1",
            type: "resistive"
        },{
            name: "100k fan",
            current: 100,
            phase: "Three",
            connections: "L1, L2, L3",
            type: "inductive"
        }
    ]
};

// CONSTANTS GRABBING MODEL DATA
const userName = Project.user.username;
const projectName = Project.name;
const projectLoads = Project.loads;
// FUNCTION TO MAKE NEW ROWS FOR PDF TABLE
function loadRowFunc(projectLoads){
    let newRows = "";
    for (let i = 0; i<projectLoads.length; i++){
        const newRow = 
        "<tr><td>"+projectLoads[i].name+
        "</td><td>"+projectLoads[i].current+
        "</td><td>"+projectLoads[i].phase+
        "</td><td>"+projectLoads[i].connections+
        "</td><td>"+projectLoads[i].type+
        "</td></tr>"
        ;
        newRows += newRow;
    }
    return newRows;
}

// A variable to (in the future) generate a filename if the Project name exists

function HTMLtoPDF(loads, projectObject){
    var pdfFileName = `${(projectObject.name).replace(/\s+/g, '-')}.pdf`;
    var pdf = new jsPDF('p', 'pt', 'letter');
    // console.log(this.props);
    var projectLoads = projectObject.loads;
    var source = 
    `<div>
        <h1>ZigRig Run Diagram</h1>
        <h2>${projectObject.name}</h2>
        <table>
            <tr>
                <th>Loads</th>
                <th>Current</th>
                <th>Phase</th>
                <th>Legs</th>
                <th>Type</th>
            </tr>
            ${loadRowFunc(projectObject.loads)}
        </table>
        <table>
            <tr>
                <th>Loads</th>
                <th>L1</th>
                <th>L2</th>
                <th>L3</th>
                <th>Genny Total</th>
            </tr>
            <tr>
                <td>Totals</td>
                <td>${loads[0]}</td>
                <td>${loads[1]}</td>
                <td>${loads[2]}</td>
                <td>${loads[0]+loads[1]+loads[2]}</td>
            </tr>
        </table>
    </div>`;


    // source = $('#HTMLtoPDF')[0];
    var specialElementHandlers = {
        '#bypassme': function(element, renderer){
            return true
        }
    }
    var margins = {
        top: 50,
        left: 60,
        width: 545
    };
    pdf.fromHTML(
          source // HTML string or DOM elem ref.
          , margins.left // x coord
          , margins.top // y coord
          , {
              'width': margins.width // max width of content on PDF
              , 'elementHandlers': specialElementHandlers
          },
          function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save(pdfFileName);
          }
    )
}

export const PDF = props => {
    console.log(props.currentProject);
    return (
        // button that yields pdf
        <button
        currentProject={props.currentProject}
        loads={props.loads}
        className="pdfButton"
        onClick={()=>{
            const loadTotals = props.loads;
            const projectObject = props.currentProject;
            HTMLtoPDF(loadTotals, projectObject);
        }
            // (loads)=>{
                
            //     HTMLtoPDF();
            // }
        }
        >Generate PDF</button>
    );

};
