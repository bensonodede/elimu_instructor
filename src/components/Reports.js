import React, { Component } from "react";
import _ from "lodash";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { firebase } from "../firebase";

import "react-accessible-accordion/dist/fancy-example.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
export default class ReportsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioVideoData: [],
      week1: [],
      week2: [],
      week3: [],
      week4: []
    };
  }
  componentDidMount() {
    let SessionRef = firebase.db.collection("Session");
    let { audioVideoData } = this.state;
    SessionRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let sesh = doc.data().session;

          if (sesh.courseUid) {
            //console.log(sesh);

            if (sesh.format === "text") {
              //console.log("TEXT");
            } else {
              audioVideoData.push(sesh);
              console.log(audioVideoData);
              let myArr = audioVideoData;

              let week1s = _.map(myArr, function(o) {
                if (o.week === "week1") return o;
              });

              week1s = _.without(week1s, undefined);
              console.log(week1s);
              //console.log(sesh.format);
            }
          }
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
    //console.log(audioVideoData);
  }

  _checkData = () => {
    let weeks = [1, 2, 3, 4];

    weeks.forEach(week => {
      console.log(week);
      console.log(this.state.audioVideoData);
      //let data = this.state.audioVideoData;

      // data.forEach(val => {
      //   console.log(val);
      //    if ("week" + week.toString() === obj.week) {
      //      console.log(obj);
      //    }
      // });
      // this.state.audioVideoData.week.find(("week1") => {
      //   return week === weeks;
      // })
    });
  };
  render() {
    if (this.state.audioVideoData) {
      this._checkData();
    }

    const columns = [
      {
        dataField: "studentUid",
        text: "Student ID"
      },
      {
        dataField: "format",
        text: "Content Item"
      },
      {
        dataField: "Interaction",
        text: "Interaction %"
      },
      {
        dataField: "",
        text: "Time Spent"
      },
      {
        dataField: "",
        text: "Words Read"
      }
    ];

    let data = this.state.audioVideoData;
    return (
      <div>
        <Accordion
          onChange={itemUuid => {
            console.log(itemUuid);
          }}
          accordion={false}
        >
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Week 1</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <BootstrapTable
                bootstrap4={true}
                keyField="id"
                data={data}
                columns={columns}
                pagination={paginationFactory()}
              />
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>Week 2</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Week 3</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Week 4</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
