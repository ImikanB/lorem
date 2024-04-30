// import React from 'react'

// import { para } from './data'

// function App() {
//   return (
//     <>
//       <section className='cont'>
//         <h4>tired of boring lorem ipsum?</h4>
//         <form>
//           <label htmlFor='amount'>paragraphs:</label>
//           <input
//             type='number'
//             id='amount'
//             name='amount'
//             min={1}
//             max={8}
//             step={1}
//           ></input>
//           <button className='btn'>generate</button>
//         </form>

//         <article className='text'>
//           {para.map((graph) => {
//             const { para1, para2, para3, para4, para5, para6, para7, para8 } =
//               graph
//             return (
//               <>
//                 <p>{para1}</p>
//                 <p>{para2}</p>
//                 <p>{para3}</p>
//                 <p>{para4}</p>
//                 <p>{para5}</p>
//                 <p>{para6}</p>
//                 <p>{para7}</p>
//                 <p>{para8}</p>
//               </>
//             )
//           })}
//         </article>
//       </section>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import { para } from './data'

function App() {
  const [numParagraphs, setNumParagraphs] = useState(1)
  const [generatedParagraphs, setGeneratedParagraphs] = useState([])

  const handleInputChange = (e) => {
    setNumParagraphs(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (numParagraphs > 0) {
      setGeneratedParagraphs(para.slice(0, numParagraphs))
    } else {
      setGeneratedParagraphs([])
    }
  }

  return (
    <>
      <section className='cont'>
        <h4>tired of boring lorem ipsum?</h4>
        <form>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            min={1}
            max={8}
            step={1}
            value={numParagraphs}
            onChange={handleInputChange}
          />
          <button type='submit' onClick={handleSubmit} className='btn'>
            generate
          </button>
        </form>

        <article className='text'>
          {generatedParagraphs.map((paragraph, index) => {
            // Extracting the paragraph content dynamically
            const key = `para${index + 1}`
            return <p key={index}>{paragraph[key]}</p>
          })}
        </article>
      </section>
    </>
  )
}

export default App
