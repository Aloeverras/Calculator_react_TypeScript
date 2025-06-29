import { type JSX} from "react";
import {Button} from "reactstrap";
import "../src/scss/App.scss"

const App : () => JSX.Element = () => {
  return (
    <>
      <h1>Hello world</h1>
      <main>
        <div id="board-calculator" className="d-flex justify-content-around">
          <div>
              <div id="number-board" className="board d-grid col-12 col-md-4">
                {
                  Array.from({length : 10}, (_ : unknown, i  : number) => {
                    if (i > 0) {
                      return (
                        <Button children={i} id={`${i}-id`} key={`${i}-number-btn-key`} className="bg-warning border-0"/>
                      )
                    }
                })
                }
            </div>
            <div>
              {
                Array.from({length : 3}, (_ :unknown, i : number) => {
                  let zeros : string = "0";

                  if (i !== 0) {
                    zeros = "." + zeros.repeat(i);
                  } else {
                    zeros = ".0"
                  }

                  return (
                    <Button children={zeros}/>
                  )
                })
              }
            </div>
          </div>
          
          <div id="operator-board" className="board d-flex justify-content-between">
            {
              ["+", "-", "/", "*"].map((opBtn : string) => (
                <Button children={opBtn} id={`${opBtn}-operator-id`} className="operator-btn d-flex justify-content-around" key={`${opBtn}-key`}/>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;