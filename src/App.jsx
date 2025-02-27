import React from 'react'
import Section from './components/Section'
//import Col from './components/Col'
import ColMu from './components/Colmultiple' 
import TemplateHTML from './components/TemplateHTML'

// const tableau= [
//   {x:0, y:12},
//   {x:1, y:11},
//   {x:2, y:10},
//   {x:3, y:9},
//   {x:4, y:8},
//   {x:5, y:7},
//   {x:6, y:6},
//   {x:7, y:5},
//   {x:8, y:4},
//   {x:9, y:3},
//   {x:10, y:2},
//   {x:11, y:1},
//   {x:12, y:0},
// ]

const tableau= []

function App() {
  const lignes= 12;

  function xyw(){
   return Array.from({length: lignes}, (_, i) => (
      Array.from({length: i+1}, (_, j) => (
        <ColMu x= {j+1} y= {12 / (i+1)} key={j} />
      ))
    ))
  }
  return (
    <>
      <Section>
         {xyw()}
      </Section>
      <TemplateHTML />
    </>
  )
}

export default App