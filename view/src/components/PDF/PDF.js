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

// THE MODEL UPON WHICH OUR PDF WILL BUILD
var modelPDF =
`<div>
    <h1>ZigRig Run Diagram</h1>
    <h2>${userName}</h2>
    <h2>${projectName}</h2>
    <table>
        <tr>
            <th>Loads</th>
            <th>Current</th>
            <th>Phase</th>
            <th>Connection</th>
            <th>Type</th>
        </tr>
        ${loadRowFunc(projectLoads)}
    </table>
    <table>
        <tr>
            <th>Loads</th>
            <th>L1</th>
            <th>L2</th>
            <th>L3</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>10k light</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>10</td>
        </tr>
        <tr>
            <td>100k light</td>
            <td>26.66</td>
            <td>26.66</td>
            <td>26.66</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Totals</td>
            <td>36.66</td>
            <td>26.66</td>
            <td>26.66</td>
            <td>90</td>
        </tr>
    </table>
</div>`;

// A DUMMY TABLE STANDING BY IF MODEL GENERATOR ISN'T WORKING IN TIME
var pdfData = 
`<div>
    <h1>ZigRig Run Diagram</h1>
    <h2>T.Novell Diagram #1014</h2>
    <table>
        <tr>
            <th>Loads</th>
            <th>Connection\nType</th>
            <th>Current</th>
            <th>Leg 1</th>
            <th>Leg 2</th>
            <th>Leg 3</th>
        </tr>
        <tr>
            <td>Rooftop 20k #1</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>83.3A</td>
            <td>83.3A</td>
            <td>-----</td>
        </tr>
        <tr>
            <td>Rooftop 20k #2</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>83.3A</td>
            <td>-----</td>
            <td>83.3A</td>
        </tr>
        <tr>
            <td>Rooftop 20k #3</td>
            <td>3 Phase</td>
            <td>166.6</td>
            <td>-----</td>
            <td>83.3A</td>
            <td>83.3A</td>
        </tr>
        <tr>
            <td>Rooftop 10k #1</td>
            <td>3 Phase</td>
            <td>83.3A</td>
            <td>41.65A</td>
            <td>41.65A</td>
            <td>-----</td>
        </tr>
        <tr>
            <th>Totals</th>
            <th>-----</th>
            <th>583.1A</th>
            <th>208.25A</th>
            <th>208.25A</th>
            <th>166.6A</th>
        </tr>
        
    </table>
</div>`
;

// A variable to (in the future) generate a filename if the Project name exists
var pdfFileName = projectName ? ""+userName+"-"+projectName+".pdf":undefined;

function HTMLtoPDF(){
    var pdf = new jsPDF('p', 'pt', 'letter');
    console.log(this.props);
    var source = Project?modelPDF:pdfData;
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
            pdf.save(pdfFileName||'ZRdiagram.pdf');
          }
    )
    // A console log to see what is happening here...
    console.log();
}

export const PDF = props => {
    return (
        // button that yields pdf
        <button
        currentProject={props.currentProject}
        loads={props.loads}
        className="pdfButton"
        onClick={HTMLtoPDF}
        >Generate PDF</button>
    );
};



// ----------------R&D-GRAVEYARD----------------
// ---------------------------------------------


// react-pdf dependencies
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/core';
// import ReactPDF from '@react-pdf/node';
// -------REACT-PDF

// FUNCTION FOR CREATING THE PDF
// const renderNewPDF = () => {
//     // Create styles
//     const styles = StyleSheet.create({
//         page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//         },
//         section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//         }
//     });


//     // Create Document Component
//     const MyDocument = () => (
//         <Document>
//         <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//             <Text>Section #1</Text>
//             </View>
//             <View style={styles.section}>
//             <Text>Section #2</Text>
//             </View>
//         </Page>
//         </Document>
//     );

//     return <MyDocument />;
// };

// export const PDF = ({PDFrequest}) => {
//     return (
//         // button that yields pdf
//         <button
//         onClick={renderNewPDF}
//         >Generate PDF</button>
//     );
// };
// -------PDFKIT DEPENDENCIES
// import PDFDocument from "pdfkit";
// import fs from "fs";
// -------jsPDF
// import jsPDF from "jspdf";
// -------PDFkit functionality
// export const PDFkit = () => {
//     return (
        // button that yields pdf
        // <button
        // onClick={renderNewPDF}
//         >Generate PDF</button>
//     );
// };
// -------PDFKIT
// const renderNewPDF = () => {
//     const doc = new PDFDocument();
//     doc.pipe(fs.createWriteStream('newPDF.pdf'));
//     doc.fontSize(25).text("Hello, world!");
//     doc.end();
// }
