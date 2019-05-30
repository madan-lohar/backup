import React, { Component } from "react";
import {INITIAL_VALUE, ReactSVGPanZoom, TOOL_AUTO} from 'react-svg-pan-zoom';
import Data from './Data'

export class Zoom extends Component {
  state = {
		tool: TOOL_AUTO, 
		value: INITIAL_VALUE,
		zoomX : null,
		zoomY : null
	}
  Viewer = null
    
  componentDidMount() {
    
    this.Viewer.fitToViewer();

	}
	
	changeTool(nextTool) {
    this.setState({tool: nextTool})
  }

  changeValue(nextValue) {
		// console.log(nextValue)
    this.setState({value: nextValue})
	}
	

	

  render() {

    let zoomDir = [0.7,0]

    const handleZoom = () =>{

     
      let zoomVal = this.state.value.a;
      let seats = document.getElementById("seats");
      let standName = document.getElementById("standName");
      // console.log(this.Viewer)

      if (zoomDir.length > 1){ 
          zoomDir.shift(1)
        }
      
      zoomDir.push(zoomVal)
      // console.log(zoomVal)

      if(zoomDir[1] < zoomDir[0] && zoomVal < 1){
        this.Viewer.fitToViewer()
        zoomDir=[0,0]
      }
      

      if(zoomVal > 3.5){
          seats.style.opacity = 1
          standName.style.opacity = 0
      }
      else{
        seats.style.opacity = 0
        standName.style.opacity = 1
      }

   
      
    }
		const handleClick = (e) =>{
			let { zoomX, zoomY } = this.state
			let x = (e.target.getBBox().x) 
			let y = (e.target.getBBox().y) 
			this.Viewer.fitSelection(x, y, 55, 55)
			console.log(this.state)
		}

		function preventDefault(e) {
			e = e || window.event;
			if (e.preventDefault)
					e.preventDefault();
			e.returnValue = false;  
		}

		const scrollingStop = () =>{
			// console.log("yo")
			document.addEventListener('wheel', preventDefault, {passive: false});
		}

		const scrollingStart = () =>{
			// console.log("scrolling")
			document.removeEventListener('wheel', preventDefault, {passive: false});
		} 

    
    const pathList = Data.map( path =>{
      return(
        <path
              className={path.className}
              d={path.data} key={path.id} onClick={(e) => handleClick(e)}
            />
      )
    })
    return (
      <div style={{ width: 800 + "px"}}  onMouseOver = {() => scrollingStop()} onMouseOut = {() => scrollingStart()}>
        <button
          className="btn"
          onClick={() => this.Viewer.zoomOnViewerCenter(1.1)}
        >
          Zoom in
        </button>
        <button
          className="btn"
          onClick={() =>
            this.Viewer.fitSelection(200, 200, 80, 80)
          }
        >
          Zoom area 200x200
        </button>
        <button className="btn" onClick={() => this.Viewer.fitToViewer()}>
          Fit
        </button>

        <hr />

        <ReactSVGPanZoom
          width={500}
          height={500}
          style={{transition: "all .3s linear"}}
          scaleFactorMax={10}
          scaleFactorMin={0.7}
          scaleFactorOnWheel={1.1}
          background={"#FFF"}
          onZoom={handleZoom}
          toolbarProps={{position:"none"}}
          
					detectAutoPan={false}
					tool={this.state.tool} onChangeTool={tool => this.changeTool(tool)}
					value={this.state.value} 
					onChangeValue={value => this.changeValue(value)}
          
          ref={Viewer => (this.Viewer = Viewer)}
          onClick={event => {
            // let seats = document.getElementById("seats");
            // let standName = document.getElementById("standName")
            
            // this.Viewer.fitSelection((event.x - 20) , (event.y - 20), 55, 55)
            // seats.style.opacity = 1
            // standName.style.opacity = 0;
						console.log("svg points", event.x, event.y)
						this.setState({
							zoomX: event.x,
							zoomY: event.y
						})
            
          }
            
          }
        >
          <svg width={623} height={686}>
          <g id="stands">
            {pathList}
          </g>
          <g id="standName">
            <def>
              <path className="st10" id="A" d="M280.2,170.2H342" />
            </def>
            <text>
              <textPath href="#A" startOffset="50%" text-anchor="middle">
                A
              </textPath>
            </text>

            <def>
              <path className="st10" id="B" d="M336,170.2h41.2" />
            </def>
            <text>
              <textPath href="#B" startOffset="50%" text-anchor="middle">
                B
              </textPath>
            </text>

            <def>
              <path className="st10" id="C" d="M377.8,184.3h33.3" />
            </def>
            <text>
              <textPath href="#C" startOffset="50%" text-anchor="middle">
                C
              </textPath>
            </text>

            <def>
              <path className="st10" id="D" d="M403.3,265.1 489.7,265 " />
            </def>
            <text>
              <textPath href="#D" startOffset="50%" text-anchor="middle">
                D
              </textPath>
            </text>

            <def>
              <path className="st10" id="E" d="M403.3,305.2h86.4" />
            </def>
            <text>
              <textPath href="#E" startOffset="50%" text-anchor="middle">
                E
              </textPath>
            </text>

            <def>
              <path className="st10" id="F" d="M403.3,347.9h86.4" />
            </def>
            <text>
              <textPath href="#F" startOffset="50%" text-anchor="middle">
                F
              </textPath>
            </text>

            <def>
              <path className="st10" id="G" d="M403.3,392.9h86.4" />
            </def>
            <text>
              <textPath href="#G" startOffset="50%" text-anchor="middle">
                G
              </textPath>
            </text>

            <def>
              <path className="st10" id="H" d="M403.3,433.9h86.4" />
            </def>
            <text>
              <textPath href="#H" startOffset="50%" text-anchor="middle">
                H
              </textPath>
            </text>

            <def>
              <path className="st10" id="I" d="M376.9,519.3h39.5" />
            </def>
            <text>
              <textPath href="#I" startOffset="50%" text-anchor="middle">
                I
              </textPath>
            </text>

            <def>
              <path className="st10" id="J" d="M335.1,534.8h42.7" />
            </def>
            <text>
              <textPath href="#J" startOffset="50%" text-anchor="middle">
                J
              </textPath>
            </text>

            <def>
              <path className="st10" id="K" d="M293.6,534.8h34.5" />
            </def>
            <text>
              <textPath href="#K" startOffset="50%" text-anchor="middle">
                K
              </textPath>
            </text>

            <def>
              <path className="st10" id="L" d="M233.2,534.8H300" />
            </def>
            <text>
              <textPath href="#L" startOffset="50%" text-anchor="middle">
                L
              </textPath>
            </text>

            <def>
              <path className="st10" id="M" d="M201.6,519.3h38" />
            </def>
            <text>
              <textPath href="#M" startOffset="50%" text-anchor="middle">
                M
              </textPath>
            </text>

            <def>
              <path className="st10" id="N" d="M118.8,433.7H232" />
            </def>
            <text>
              <textPath href="#N" startOffset="50%" text-anchor="middle">
                N
              </textPath>
            </text>

            <def>
              <path className="st10" id="O" d="M130.3,389.4h87.5" />
            </def>
            <text>
              <textPath href="#O" startOffset="50%" text-anchor="middle">
                O
              </textPath>
            </text>

            <def>
              <path className="st10" id="P" d="M130.3,348.5h87.5" />
            </def>
            <text>
              <textPath href="#P" startOffset="50%" text-anchor="middle">
                P
              </textPath>
            </text>

            <def>
              <path className="st10" id="Q" d="M130.3,305.5h87.5" />
            </def>
            <text>
              <textPath href="#Q" startOffset="50%" text-anchor="middle">
                Q
              </textPath>
            </text>

            <def>
              <path className="st10" id="R" d="M130.3,265.5h87.5" />
            </def>
            <text>
              <textPath href="#R" startOffset="50%" text-anchor="middle">
                R
              </textPath>
            </text>

            <def>
              <path className="st10" id="S" d="M208.3,181.8h32.4" />
            </def>
            <text>
              <textPath href="#S" startOffset="50%" text-anchor="middle">
                S
              </textPath>
            </text>

            <def>
              <path className="st10" id="T" d="M246.5,170.2h42" />
            </def>
            <text>
              <textPath href="#T" startOffset="50%" text-anchor="middle">
                T
              </textPath>
            </text>
            </g>
            <g id="seats">
	<circle className="st9" cx="293.9" cy="210" r="0.6"/>
		<circle className="st9" cx="295.5" cy="210" r="0.6"/>
		<circle className="st9" cx="297" cy="210" r="0.6"/>
		<circle className="st9" cx="298.6" cy="210" r="0.6"/>
		<circle className="st9" cx="300.1" cy="210" r="0.6"/>
		<circle className="st9" cx="301.7" cy="210" r="0.6"/>
		<circle className="st9" cx="303.2" cy="210" r="0.6"/>
		<circle className="st9" cx="304.8" cy="210" r="0.6"/>
		<circle className="st9" cx="306.4" cy="210" r="0.6"/>
		<circle className="st9" cx="307.9" cy="210" r="0.6"/>
		<circle className="st9" cx="309.5" cy="210" r="0.6"/>
		<circle className="st9" cx="311" cy="210" r="0.6"/>
		<circle className="st9" cx="312.6" cy="210" r="0.6"/>
		<circle className="st9" cx="314.1" cy="210" r="0.6"/>
		<circle className="st9" cx="315.7" cy="210" r="0.6"/>
		<circle className="st9" cx="317.3" cy="210" r="0.6"/>
		<circle className="st9" cx="318.8" cy="210" r="0.6"/>
		<circle className="st9" cx="320.4" cy="210" r="0.6"/>
		<circle className="st9" cx="321.9" cy="210" r="0.6"/>
		<circle className="st9" cx="323.5" cy="210" r="0.6"/>
		<circle className="st9" cx="325" cy="210" r="0.6"/>
		<circle className="st9" cx="326.6" cy="210" r="0.6"/>
		<circle className="st9" cx="293.9" cy="208.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="208.5" r="0.6"/>
		<circle className="st9" cx="297" cy="208.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="208.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="208.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="208.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="208.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="208.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="208.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="208.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="208.5" r="0.6"/>
		<circle className="st9" cx="311" cy="208.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="208.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="208.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="208.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="208.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="208.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="208.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="208.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="208.5" r="0.6"/>
		<circle className="st9" cx="325" cy="208.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="208.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="207.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="207.1" r="0.6"/>
		<circle className="st9" cx="297" cy="207.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="207.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="207.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="207.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="207.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="207.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="207.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="207.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="207.1" r="0.6"/>
		<circle className="st9" cx="311" cy="207.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="207.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="207.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="207.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="207.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="207.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="207.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="207.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="207.1" r="0.6"/>
		<circle className="st9" cx="325" cy="207.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="207.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="205.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="205.7" r="0.6"/>
		<circle className="st9" cx="297" cy="205.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="205.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="205.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="205.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="205.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="205.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="205.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="205.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="205.7" r="0.6"/>
		<circle className="st9" cx="311" cy="205.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="205.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="205.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="205.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="205.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="205.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="205.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="205.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="205.7" r="0.6"/>
		<circle className="st9" cx="325" cy="205.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="205.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="204.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="204.2" r="0.6"/>
		<circle className="st9" cx="297" cy="204.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="204.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="204.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="204.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="204.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="204.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="204.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="204.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="204.2" r="0.6"/>
		<circle className="st9" cx="311" cy="204.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="204.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="204.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="204.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="204.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="204.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="204.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="204.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="204.2" r="0.6"/>
		<circle className="st9" cx="325" cy="204.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="204.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="202.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="202.8" r="0.6"/>
		<circle className="st9" cx="297" cy="202.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="202.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="202.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="202.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="202.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="202.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="202.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="202.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="202.8" r="0.6"/>
		<circle className="st9" cx="311" cy="202.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="202.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="202.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="202.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="202.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="202.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="202.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="202.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="202.8" r="0.6"/>
		<circle className="st9" cx="325" cy="202.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="202.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="201.3" r="0.6"/>
		<circle className="st9" cx="295.5" cy="201.3" r="0.6"/>
		<circle className="st9" cx="297" cy="201.3" r="0.6"/>
		<circle className="st9" cx="298.6" cy="201.3" r="0.6"/>
		<circle className="st9" cx="300.1" cy="201.3" r="0.6"/>
		<circle className="st9" cx="301.7" cy="201.3" r="0.6"/>
		<circle className="st9" cx="303.2" cy="201.3" r="0.6"/>
		<circle className="st9" cx="304.8" cy="201.3" r="0.6"/>
		<circle className="st9" cx="306.4" cy="201.3" r="0.6"/>
		<circle className="st9" cx="307.9" cy="201.3" r="0.6"/>
		<circle className="st9" cx="309.5" cy="201.3" r="0.6"/>
		<circle className="st9" cx="311" cy="201.3" r="0.6"/>
		<circle className="st9" cx="312.6" cy="201.3" r="0.6"/>
		<circle className="st9" cx="314.1" cy="201.3" r="0.6"/>
		<circle className="st9" cx="315.7" cy="201.3" r="0.6"/>
		<circle className="st9" cx="317.3" cy="201.3" r="0.6"/>
		<circle className="st9" cx="318.8" cy="201.3" r="0.6"/>
		<circle className="st9" cx="320.4" cy="201.3" r="0.6"/>
		<circle className="st9" cx="321.9" cy="201.3" r="0.6"/>
		<circle className="st9" cx="323.5" cy="201.3" r="0.6"/>
		<circle className="st9" cx="325" cy="201.3" r="0.6"/>
		<circle className="st9" cx="326.6" cy="201.3" r="0.6"/>
		<circle className="st9" cx="293.9" cy="199.9" r="0.6"/>
		<circle className="st9" cx="295.5" cy="199.9" r="0.6"/>
		<circle className="st9" cx="297" cy="199.9" r="0.6"/>
		<circle className="st9" cx="298.6" cy="199.9" r="0.6"/>
		<circle className="st9" cx="300.1" cy="199.9" r="0.6"/>
		<circle className="st9" cx="301.7" cy="199.9" r="0.6"/>
		<circle className="st9" cx="303.2" cy="199.9" r="0.6"/>
		<circle className="st9" cx="304.8" cy="199.9" r="0.6"/>
		<circle className="st9" cx="306.4" cy="199.9" r="0.6"/>
		<circle className="st9" cx="307.9" cy="199.9" r="0.6"/>
		<circle className="st9" cx="309.5" cy="199.9" r="0.6"/>
		<circle className="st9" cx="311" cy="199.9" r="0.6"/>
		<circle className="st9" cx="312.6" cy="199.9" r="0.6"/>
		<circle className="st9" cx="314.1" cy="199.9" r="0.6"/>
		<circle className="st9" cx="315.7" cy="199.9" r="0.6"/>
		<circle className="st9" cx="317.3" cy="199.9" r="0.6"/>
		<circle className="st9" cx="318.8" cy="199.9" r="0.6"/>
		<circle className="st9" cx="320.4" cy="199.9" r="0.6"/>
		<circle className="st9" cx="321.9" cy="199.9" r="0.6"/>
		<circle className="st9" cx="323.5" cy="199.9" r="0.6"/>
		<circle className="st9" cx="325" cy="199.9" r="0.6"/>
		<circle className="st9" cx="326.6" cy="199.9" r="0.6"/>
		<circle className="st9" cx="293.9" cy="198.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="198.5" r="0.6"/>
		<circle className="st9" cx="297" cy="198.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="198.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="198.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="198.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="198.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="198.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="198.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="198.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="198.5" r="0.6"/>
		<circle className="st9" cx="311" cy="198.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="198.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="198.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="198.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="198.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="198.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="198.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="198.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="198.5" r="0.6"/>
		<circle className="st9" cx="325" cy="198.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="198.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="197" r="0.6"/>
		<circle className="st9" cx="295.5" cy="197" r="0.6"/>
		<circle className="st9" cx="297" cy="197" r="0.6"/>
		<circle className="st9" cx="298.6" cy="197" r="0.6"/>
		<circle className="st9" cx="300.1" cy="197" r="0.6"/>
		<circle className="st9" cx="301.7" cy="197" r="0.6"/>
		<circle className="st9" cx="303.2" cy="197" r="0.6"/>
		<circle className="st9" cx="304.8" cy="197" r="0.6"/>
		<circle className="st9" cx="306.4" cy="197" r="0.6"/>
		<circle className="st9" cx="307.9" cy="197" r="0.6"/>
		<circle className="st9" cx="309.5" cy="197" r="0.6"/>
		<circle className="st9" cx="311" cy="197" r="0.6"/>
		<circle className="st9" cx="312.6" cy="197" r="0.6"/>
		<circle className="st9" cx="314.1" cy="197" r="0.6"/>
		<circle className="st9" cx="315.7" cy="197" r="0.6"/>
		<circle className="st9" cx="317.3" cy="197" r="0.6"/>
		<circle className="st9" cx="318.8" cy="197" r="0.6"/>
		<circle className="st9" cx="320.4" cy="197" r="0.6"/>
		<circle className="st9" cx="321.9" cy="197" r="0.6"/>
		<circle className="st9" cx="323.5" cy="197" r="0.6"/>
		<circle className="st9" cx="325" cy="197" r="0.6"/>
		<circle className="st9" cx="326.6" cy="197" r="0.6"/>
		<circle className="st9" cx="293.9" cy="195.6" r="0.6"/>
		<circle className="st9" cx="295.5" cy="195.6" r="0.6"/>
		<circle className="st9" cx="297" cy="195.6" r="0.6"/>
		<circle className="st9" cx="298.6" cy="195.6" r="0.6"/>
		<circle className="st9" cx="300.1" cy="195.6" r="0.6"/>
		<circle className="st9" cx="301.7" cy="195.6" r="0.6"/>
		<circle className="st9" cx="303.2" cy="195.6" r="0.6"/>
		<circle className="st9" cx="304.8" cy="195.6" r="0.6"/>
		<circle className="st9" cx="306.4" cy="195.6" r="0.6"/>
		<circle className="st9" cx="307.9" cy="195.6" r="0.6"/>
		<circle className="st9" cx="309.5" cy="195.6" r="0.6"/>
		<circle className="st9" cx="311" cy="195.6" r="0.6"/>
		<circle className="st9" cx="312.6" cy="195.6" r="0.6"/>
		<circle className="st9" cx="314.1" cy="195.6" r="0.6"/>
		<circle className="st9" cx="315.7" cy="195.6" r="0.6"/>
		<circle className="st9" cx="317.3" cy="195.6" r="0.6"/>
		<circle className="st9" cx="318.8" cy="195.6" r="0.6"/>
		<circle className="st9" cx="320.4" cy="195.6" r="0.6"/>
		<circle className="st9" cx="321.9" cy="195.6" r="0.6"/>
		<circle className="st9" cx="323.5" cy="195.6" r="0.6"/>
		<circle className="st9" cx="325" cy="195.6" r="0.6"/>
		<circle className="st9" cx="326.6" cy="195.6" r="0.6"/>
		<circle className="st9" cx="293.9" cy="194.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="194.1" r="0.6"/>
		<circle className="st9" cx="297" cy="194.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="194.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="194.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="194.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="194.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="194.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="194.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="194.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="194.1" r="0.6"/>
		<circle className="st9" cx="311" cy="194.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="194.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="194.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="194.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="194.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="194.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="194.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="194.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="194.1" r="0.6"/>
		<circle className="st9" cx="325" cy="194.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="194.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="192.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="192.7" r="0.6"/>
		<circle className="st9" cx="297" cy="192.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="192.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="192.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="192.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="192.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="192.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="192.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="192.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="192.7" r="0.6"/>
		<circle className="st9" cx="311" cy="192.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="192.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="192.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="192.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="192.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="192.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="192.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="192.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="192.7" r="0.6"/>
		<circle className="st9" cx="325" cy="192.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="192.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="191.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="191.2" r="0.6"/>
		<circle className="st9" cx="297" cy="191.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="191.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="191.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="191.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="191.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="191.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="191.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="191.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="191.2" r="0.6"/>
		<circle className="st9" cx="311" cy="191.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="191.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="191.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="191.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="191.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="191.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="191.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="191.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="191.2" r="0.6"/>
		<circle className="st9" cx="325" cy="191.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="191.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="189.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="189.8" r="0.6"/>
		<circle className="st9" cx="297" cy="189.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="189.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="189.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="189.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="189.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="189.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="189.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="189.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="189.8" r="0.6"/>
		<circle className="st9" cx="311" cy="189.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="189.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="189.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="189.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="189.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="189.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="189.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="189.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="189.8" r="0.6"/>
		<circle className="st9" cx="325" cy="189.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="189.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="188.4" r="0.6"/>
		<circle className="st9" cx="295.5" cy="188.4" r="0.6"/>
		<circle className="st9" cx="297" cy="188.4" r="0.6"/>
		<circle className="st9" cx="298.6" cy="188.4" r="0.6"/>
		<circle className="st9" cx="300.1" cy="188.4" r="0.6"/>
		<circle className="st9" cx="301.7" cy="188.4" r="0.6"/>
		<circle className="st9" cx="303.2" cy="188.4" r="0.6"/>
		<circle className="st9" cx="304.8" cy="188.4" r="0.6"/>
		<circle className="st9" cx="306.4" cy="188.4" r="0.6"/>
		<circle className="st9" cx="307.9" cy="188.4" r="0.6"/>
		<circle className="st9" cx="309.5" cy="188.4" r="0.6"/>
		<circle className="st9" cx="311" cy="188.4" r="0.6"/>
		<circle className="st9" cx="312.6" cy="188.4" r="0.6"/>
		<circle className="st9" cx="314.1" cy="188.4" r="0.6"/>
		<circle className="st9" cx="315.7" cy="188.4" r="0.6"/>
		<circle className="st9" cx="317.3" cy="188.4" r="0.6"/>
		<circle className="st9" cx="318.8" cy="188.4" r="0.6"/>
		<circle className="st9" cx="320.4" cy="188.4" r="0.6"/>
		<circle className="st9" cx="321.9" cy="188.4" r="0.6"/>
		<circle className="st9" cx="323.5" cy="188.4" r="0.6"/>
		<circle className="st9" cx="325" cy="188.4" r="0.6"/>
		<circle className="st9" cx="326.6" cy="188.4" r="0.6"/>
		<circle className="st9" cx="293.9" cy="186.9" r="0.6"/>
		<circle className="st9" cx="295.5" cy="186.9" r="0.6"/>
		<circle className="st9" cx="297" cy="186.9" r="0.6"/>
		<circle className="st9" cx="298.6" cy="186.9" r="0.6"/>
		<circle className="st9" cx="300.1" cy="186.9" r="0.6"/>
		<circle className="st9" cx="301.7" cy="186.9" r="0.6"/>
		<circle className="st9" cx="303.2" cy="186.9" r="0.6"/>
		<circle className="st9" cx="304.8" cy="186.9" r="0.6"/>
		<circle className="st9" cx="306.4" cy="186.9" r="0.6"/>
		<circle className="st9" cx="307.9" cy="186.9" r="0.6"/>
		<circle className="st9" cx="309.5" cy="186.9" r="0.6"/>
		<circle className="st9" cx="311" cy="186.9" r="0.6"/>
		<circle className="st9" cx="312.6" cy="186.9" r="0.6"/>
		<circle className="st9" cx="314.1" cy="186.9" r="0.6"/>
		<circle className="st9" cx="315.7" cy="186.9" r="0.6"/>
		<circle className="st9" cx="317.3" cy="186.9" r="0.6"/>
		<circle className="st9" cx="318.8" cy="186.9" r="0.6"/>
		<circle className="st9" cx="320.4" cy="186.9" r="0.6"/>
		<circle className="st9" cx="321.9" cy="186.9" r="0.6"/>
		<circle className="st9" cx="323.5" cy="186.9" r="0.6"/>
		<circle className="st9" cx="325" cy="186.9" r="0.6"/>
		<circle className="st9" cx="326.6" cy="186.9" r="0.6"/>
		<circle className="st9" cx="293.9" cy="185.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="185.5" r="0.6"/>
		<circle className="st9" cx="297" cy="185.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="185.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="185.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="185.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="185.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="185.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="185.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="185.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="185.5" r="0.6"/>
		<circle className="st9" cx="311" cy="185.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="185.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="185.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="185.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="185.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="185.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="185.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="185.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="185.5" r="0.6"/>
		<circle className="st9" cx="325" cy="185.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="185.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="184" r="0.6"/>
		<circle className="st9" cx="295.5" cy="184" r="0.6"/>
		<circle className="st9" cx="297" cy="184" r="0.6"/>
		<circle className="st9" cx="298.6" cy="184" r="0.6"/>
		<circle className="st9" cx="300.1" cy="184" r="0.6"/>
		<circle className="st9" cx="301.7" cy="184" r="0.6"/>
		<circle className="st9" cx="303.2" cy="184" r="0.6"/>
		<circle className="st9" cx="304.8" cy="184" r="0.6"/>
		<circle className="st9" cx="306.4" cy="184" r="0.6"/>
		<circle className="st9" cx="307.9" cy="184" r="0.6"/>
		<circle className="st9" cx="309.5" cy="184" r="0.6"/>
		<circle className="st9" cx="311" cy="184" r="0.6"/>
		<circle className="st9" cx="312.6" cy="184" r="0.6"/>
		<circle className="st9" cx="314.1" cy="184" r="0.6"/>
		<circle className="st9" cx="315.7" cy="184" r="0.6"/>
		<circle className="st9" cx="317.3" cy="184" r="0.6"/>
		<circle className="st9" cx="318.8" cy="184" r="0.6"/>
		<circle className="st9" cx="320.4" cy="184" r="0.6"/>
		<circle className="st9" cx="321.9" cy="184" r="0.6"/>
		<circle className="st9" cx="323.5" cy="184" r="0.6"/>
		<circle className="st9" cx="325" cy="184" r="0.6"/>
		<circle className="st9" cx="326.6" cy="184" r="0.6"/>
		<circle className="st9" cx="293.9" cy="182.6" r="0.6"/>
		<circle className="st9" cx="295.5" cy="182.6" r="0.6"/>
		<circle className="st9" cx="297" cy="182.6" r="0.6"/>
		<circle className="st9" cx="298.6" cy="182.6" r="0.6"/>
		<circle className="st9" cx="300.1" cy="182.6" r="0.6"/>
		<circle className="st9" cx="301.7" cy="182.6" r="0.6"/>
		<circle className="st9" cx="303.2" cy="182.6" r="0.6"/>
		<circle className="st9" cx="304.8" cy="182.6" r="0.6"/>
		<circle className="st9" cx="306.4" cy="182.6" r="0.6"/>
		<circle className="st9" cx="307.9" cy="182.6" r="0.6"/>
		<circle className="st9" cx="309.5" cy="182.6" r="0.6"/>
		<circle className="st9" cx="311" cy="182.6" r="0.6"/>
		<circle className="st9" cx="312.6" cy="182.6" r="0.6"/>
		<circle className="st9" cx="314.1" cy="182.6" r="0.6"/>
		<circle className="st9" cx="315.7" cy="182.6" r="0.6"/>
		<circle className="st9" cx="317.3" cy="182.6" r="0.6"/>
		<circle className="st9" cx="318.8" cy="182.6" r="0.6"/>
		<circle className="st9" cx="320.4" cy="182.6" r="0.6"/>
		<circle className="st9" cx="321.9" cy="182.6" r="0.6"/>
		<circle className="st9" cx="323.5" cy="182.6" r="0.6"/>
		<circle className="st9" cx="325" cy="182.6" r="0.6"/>
		<circle className="st9" cx="326.6" cy="182.6" r="0.6"/>
		<circle className="st9" cx="293.9" cy="181.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="181.1" r="0.6"/>
		<circle className="st9" cx="297" cy="181.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="181.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="181.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="181.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="181.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="181.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="181.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="181.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="181.1" r="0.6"/>
		<circle className="st9" cx="311" cy="181.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="181.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="181.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="181.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="181.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="181.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="181.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="181.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="181.1" r="0.6"/>
		<circle className="st9" cx="325" cy="181.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="181.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="179.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="179.7" r="0.6"/>
		<circle className="st9" cx="297" cy="179.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="179.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="179.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="179.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="179.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="179.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="179.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="179.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="179.7" r="0.6"/>
		<circle className="st9" cx="311" cy="179.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="179.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="179.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="179.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="179.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="179.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="179.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="179.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="179.7" r="0.6"/>
		<circle className="st9" cx="325" cy="179.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="179.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="178.3" r="0.6"/>
		<circle className="st9" cx="295.5" cy="178.3" r="0.6"/>
		<circle className="st9" cx="297" cy="178.3" r="0.6"/>
		<circle className="st9" cx="298.6" cy="178.3" r="0.6"/>
		<circle className="st9" cx="300.1" cy="178.3" r="0.6"/>
		<circle className="st9" cx="301.7" cy="178.3" r="0.6"/>
		<circle className="st9" cx="303.2" cy="178.3" r="0.6"/>
		<circle className="st9" cx="304.8" cy="178.3" r="0.6"/>
		<circle className="st9" cx="306.4" cy="178.3" r="0.6"/>
		<circle className="st9" cx="307.9" cy="178.3" r="0.6"/>
		<circle className="st9" cx="309.5" cy="178.3" r="0.6"/>
		<circle className="st9" cx="311" cy="178.3" r="0.6"/>
		<circle className="st9" cx="312.6" cy="178.3" r="0.6"/>
		<circle className="st9" cx="314.1" cy="178.3" r="0.6"/>
		<circle className="st9" cx="315.7" cy="178.3" r="0.6"/>
		<circle className="st9" cx="317.3" cy="178.3" r="0.6"/>
		<circle className="st9" cx="318.8" cy="178.3" r="0.6"/>
		<circle className="st9" cx="320.4" cy="178.3" r="0.6"/>
		<circle className="st9" cx="321.9" cy="178.3" r="0.6"/>
		<circle className="st9" cx="323.5" cy="178.3" r="0.6"/>
		<circle className="st9" cx="325" cy="178.3" r="0.6"/>
		<circle className="st9" cx="326.6" cy="178.3" r="0.6"/>
		<circle className="st9" cx="293.9" cy="176.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="176.8" r="0.6"/>
		<circle className="st9" cx="297" cy="176.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="176.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="176.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="176.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="176.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="176.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="176.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="176.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="176.8" r="0.6"/>
		<circle className="st9" cx="311" cy="176.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="176.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="176.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="176.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="176.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="176.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="176.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="176.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="176.8" r="0.6"/>
		<circle className="st9" cx="325" cy="176.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="176.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="175.4" r="0.6"/>
		<circle className="st9" cx="295.5" cy="175.4" r="0.6"/>
		<circle className="st9" cx="297" cy="175.4" r="0.6"/>
		<circle className="st9" cx="298.6" cy="175.4" r="0.6"/>
		<circle className="st9" cx="300.1" cy="175.4" r="0.6"/>
		<circle className="st9" cx="301.7" cy="175.4" r="0.6"/>
		<circle className="st9" cx="303.2" cy="175.4" r="0.6"/>
		<circle className="st9" cx="304.8" cy="175.4" r="0.6"/>
		<circle className="st9" cx="306.4" cy="175.4" r="0.6"/>
		<circle className="st9" cx="307.9" cy="175.4" r="0.6"/>
		<circle className="st9" cx="309.5" cy="175.4" r="0.6"/>
		<circle className="st9" cx="311" cy="175.4" r="0.6"/>
		<circle className="st9" cx="312.6" cy="175.4" r="0.6"/>
		<circle className="st9" cx="314.1" cy="175.4" r="0.6"/>
		<circle className="st9" cx="315.7" cy="175.4" r="0.6"/>
		<circle className="st9" cx="317.3" cy="175.4" r="0.6"/>
		<circle className="st9" cx="318.8" cy="175.4" r="0.6"/>
		<circle className="st9" cx="320.4" cy="175.4" r="0.6"/>
		<circle className="st9" cx="321.9" cy="175.4" r="0.6"/>
		<circle className="st9" cx="323.5" cy="175.4" r="0.6"/>
		<circle className="st9" cx="325" cy="175.4" r="0.6"/>
		<circle className="st9" cx="326.6" cy="175.4" r="0.6"/>
		<circle className="st9" cx="293.9" cy="173.9" r="0.6"/>
		<circle className="st9" cx="295.5" cy="173.9" r="0.6"/>
		<circle className="st9" cx="297" cy="173.9" r="0.6"/>
		<circle className="st9" cx="298.6" cy="173.9" r="0.6"/>
		<circle className="st9" cx="300.1" cy="173.9" r="0.6"/>
		<circle className="st9" cx="301.7" cy="173.9" r="0.6"/>
		<circle className="st9" cx="303.2" cy="173.9" r="0.6"/>
		<circle className="st9" cx="304.8" cy="173.9" r="0.6"/>
		<circle className="st9" cx="306.4" cy="173.9" r="0.6"/>
		<circle className="st9" cx="307.9" cy="173.9" r="0.6"/>
		<circle className="st9" cx="309.5" cy="173.9" r="0.6"/>
		<circle className="st9" cx="311" cy="173.9" r="0.6"/>
		<circle className="st9" cx="312.6" cy="173.9" r="0.6"/>
		<circle className="st9" cx="314.1" cy="173.9" r="0.6"/>
		<circle className="st9" cx="315.7" cy="173.9" r="0.6"/>
		<circle className="st9" cx="317.3" cy="173.9" r="0.6"/>
		<circle className="st9" cx="318.8" cy="173.9" r="0.6"/>
		<circle className="st9" cx="320.4" cy="173.9" r="0.6"/>
		<circle className="st9" cx="321.9" cy="173.9" r="0.6"/>
		<circle className="st9" cx="323.5" cy="173.9" r="0.6"/>
		<circle className="st9" cx="325" cy="173.9" r="0.6"/>
		<circle className="st9" cx="326.6" cy="173.9" r="0.6"/>
		<circle className="st9" cx="293.9" cy="172.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="172.5" r="0.6"/>
		<circle className="st9" cx="297" cy="172.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="172.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="172.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="172.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="172.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="172.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="172.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="172.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="172.5" r="0.6"/>
		<circle className="st9" cx="311" cy="172.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="172.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="172.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="172.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="172.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="172.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="172.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="172.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="172.5" r="0.6"/>
		<circle className="st9" cx="325" cy="172.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="172.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="171.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="171.1" r="0.6"/>
		<circle className="st9" cx="297" cy="171.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="171.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="171.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="171.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="171.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="171.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="171.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="171.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="171.1" r="0.6"/>
		<circle className="st9" cx="311" cy="171.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="171.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="171.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="171.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="171.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="171.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="171.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="171.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="171.1" r="0.6"/>
		<circle className="st9" cx="325" cy="171.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="171.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="169.6" r="0.6"/>
		<circle className="st9" cx="295.5" cy="169.6" r="0.6"/>
		<circle className="st9" cx="297" cy="169.6" r="0.6"/>
		<circle className="st9" cx="298.6" cy="169.6" r="0.6"/>
		<circle className="st9" cx="300.1" cy="169.6" r="0.6"/>
		<circle className="st9" cx="301.7" cy="169.6" r="0.6"/>
		<circle className="st9" cx="303.2" cy="169.6" r="0.6"/>
		<circle className="st9" cx="304.8" cy="169.6" r="0.6"/>
		<circle className="st9" cx="306.4" cy="169.6" r="0.6"/>
		<circle className="st9" cx="307.9" cy="169.6" r="0.6"/>
		<circle className="st9" cx="309.5" cy="169.6" r="0.6"/>
		<circle className="st9" cx="311" cy="169.6" r="0.6"/>
		<circle className="st9" cx="312.6" cy="169.6" r="0.6"/>
		<circle className="st9" cx="314.1" cy="169.6" r="0.6"/>
		<circle className="st9" cx="315.7" cy="169.6" r="0.6"/>
		<circle className="st9" cx="317.3" cy="169.6" r="0.6"/>
		<circle className="st9" cx="318.8" cy="169.6" r="0.6"/>
		<circle className="st9" cx="320.4" cy="169.6" r="0.6"/>
		<circle className="st9" cx="321.9" cy="169.6" r="0.6"/>
		<circle className="st9" cx="323.5" cy="169.6" r="0.6"/>
		<circle className="st9" cx="325" cy="169.6" r="0.6"/>
		<circle className="st9" cx="326.6" cy="169.6" r="0.6"/>
		<circle className="st9" cx="293.9" cy="168.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="168.2" r="0.6"/>
		<circle className="st9" cx="297" cy="168.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="168.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="168.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="168.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="168.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="168.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="168.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="168.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="168.2" r="0.6"/>
		<circle className="st9" cx="311" cy="168.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="168.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="168.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="168.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="168.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="168.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="168.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="168.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="168.2" r="0.6"/>
		<circle className="st9" cx="325" cy="168.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="168.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="166.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="166.7" r="0.6"/>
		<circle className="st9" cx="297" cy="166.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="166.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="166.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="166.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="166.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="166.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="166.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="166.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="166.7" r="0.6"/>
		<circle className="st9" cx="311" cy="166.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="166.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="166.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="166.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="166.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="166.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="166.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="166.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="166.7" r="0.6"/>
		<circle className="st9" cx="325" cy="166.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="166.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="165.3" r="0.6"/>
		<circle className="st9" cx="295.5" cy="165.3" r="0.6"/>
		<circle className="st9" cx="297" cy="165.3" r="0.6"/>
		<circle className="st9" cx="298.6" cy="165.3" r="0.6"/>
		<circle className="st9" cx="300.1" cy="165.3" r="0.6"/>
		<circle className="st9" cx="301.7" cy="165.3" r="0.6"/>
		<circle className="st9" cx="303.2" cy="165.3" r="0.6"/>
		<circle className="st9" cx="304.8" cy="165.3" r="0.6"/>
		<circle className="st9" cx="306.4" cy="165.3" r="0.6"/>
		<circle className="st9" cx="307.9" cy="165.3" r="0.6"/>
		<circle className="st9" cx="309.5" cy="165.3" r="0.6"/>
		<circle className="st9" cx="311" cy="165.3" r="0.6"/>
		<circle className="st9" cx="312.6" cy="165.3" r="0.6"/>
		<circle className="st9" cx="314.1" cy="165.3" r="0.6"/>
		<circle className="st9" cx="315.7" cy="165.3" r="0.6"/>
		<circle className="st9" cx="317.3" cy="165.3" r="0.6"/>
		<circle className="st9" cx="318.8" cy="165.3" r="0.6"/>
		<circle className="st9" cx="320.4" cy="165.3" r="0.6"/>
		<circle className="st9" cx="321.9" cy="165.3" r="0.6"/>
		<circle className="st9" cx="323.5" cy="165.3" r="0.6"/>
		<circle className="st9" cx="325" cy="165.3" r="0.6"/>
		<circle className="st9" cx="326.6" cy="165.3" r="0.6"/>
		<circle className="st9" cx="293.9" cy="163.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="163.8" r="0.6"/>
		<circle className="st9" cx="297" cy="163.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="163.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="163.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="163.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="163.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="163.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="163.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="163.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="163.8" r="0.6"/>
		<circle className="st9" cx="311" cy="163.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="163.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="163.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="163.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="163.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="163.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="163.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="163.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="163.8" r="0.6"/>
		<circle className="st9" cx="325" cy="163.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="163.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="162.4" r="0.6"/>
		<circle className="st9" cx="295.5" cy="162.4" r="0.6"/>
		<circle className="st9" cx="297" cy="162.4" r="0.6"/>
		<circle className="st9" cx="298.6" cy="162.4" r="0.6"/>
		<circle className="st9" cx="300.1" cy="162.4" r="0.6"/>
		<circle className="st9" cx="301.7" cy="162.4" r="0.6"/>
		<circle className="st9" cx="303.2" cy="162.4" r="0.6"/>
		<circle className="st9" cx="304.8" cy="162.4" r="0.6"/>
		<circle className="st9" cx="306.4" cy="162.4" r="0.6"/>
		<circle className="st9" cx="307.9" cy="162.4" r="0.6"/>
		<circle className="st9" cx="309.5" cy="162.4" r="0.6"/>
		<circle className="st9" cx="311" cy="162.4" r="0.6"/>
		<circle className="st9" cx="312.6" cy="162.4" r="0.6"/>
		<circle className="st9" cx="314.1" cy="162.4" r="0.6"/>
		<circle className="st9" cx="315.7" cy="162.4" r="0.6"/>
		<circle className="st9" cx="317.3" cy="162.4" r="0.6"/>
		<circle className="st9" cx="318.8" cy="162.4" r="0.6"/>
		<circle className="st9" cx="320.4" cy="162.4" r="0.6"/>
		<circle className="st9" cx="321.9" cy="162.4" r="0.6"/>
		<circle className="st9" cx="323.5" cy="162.4" r="0.6"/>
		<circle className="st9" cx="325" cy="162.4" r="0.6"/>
		<circle className="st9" cx="326.6" cy="162.4" r="0.6"/>
		<circle className="st9" cx="293.9" cy="161" r="0.6"/>
		<circle className="st9" cx="295.5" cy="161" r="0.6"/>
		<circle className="st9" cx="297" cy="161" r="0.6"/>
		<circle className="st9" cx="298.6" cy="161" r="0.6"/>
		<circle className="st9" cx="300.1" cy="161" r="0.6"/>
		<circle className="st9" cx="301.7" cy="161" r="0.6"/>
		<circle className="st9" cx="303.2" cy="161" r="0.6"/>
		<circle className="st9" cx="304.8" cy="161" r="0.6"/>
		<circle className="st9" cx="306.4" cy="161" r="0.6"/>
		<circle className="st9" cx="307.9" cy="161" r="0.6"/>
		<circle className="st9" cx="309.5" cy="161" r="0.6"/>
		<circle className="st9" cx="311" cy="161" r="0.6"/>
		<circle className="st9" cx="312.6" cy="161" r="0.6"/>
		<circle className="st9" cx="314.1" cy="161" r="0.6"/>
		<circle className="st9" cx="315.7" cy="161" r="0.6"/>
		<circle className="st9" cx="317.3" cy="161" r="0.6"/>
		<circle className="st9" cx="318.8" cy="161" r="0.6"/>
		<circle className="st9" cx="320.4" cy="161" r="0.6"/>
		<circle className="st9" cx="321.9" cy="161" r="0.6"/>
		<circle className="st9" cx="323.5" cy="161" r="0.6"/>
		<circle className="st9" cx="325" cy="161" r="0.6"/>
		<circle className="st9" cx="326.6" cy="161" r="0.6"/>
		<circle className="st9" cx="293.9" cy="159.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="159.5" r="0.6"/>
		<circle className="st9" cx="297" cy="159.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="159.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="159.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="159.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="159.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="159.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="159.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="159.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="159.5" r="0.6"/>
		<circle className="st9" cx="311" cy="159.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="159.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="159.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="159.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="159.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="159.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="159.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="159.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="159.5" r="0.6"/>
		<circle className="st9" cx="325" cy="159.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="159.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="158.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="158.1" r="0.6"/>
		<circle className="st9" cx="297" cy="158.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="158.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="158.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="158.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="158.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="158.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="158.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="158.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="158.1" r="0.6"/>
		<circle className="st9" cx="311" cy="158.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="158.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="158.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="158.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="158.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="158.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="158.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="158.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="158.1" r="0.6"/>
		<circle className="st9" cx="325" cy="158.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="158.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="156.6" r="0.6"/>
		<circle className="st9" cx="295.5" cy="156.6" r="0.6"/>
		<circle className="st9" cx="297" cy="156.6" r="0.6"/>
		<circle className="st9" cx="298.6" cy="156.6" r="0.6"/>
		<circle className="st9" cx="300.1" cy="156.6" r="0.6"/>
		<circle className="st9" cx="301.7" cy="156.6" r="0.6"/>
		<circle className="st9" cx="303.2" cy="156.6" r="0.6"/>
		<circle className="st9" cx="304.8" cy="156.6" r="0.6"/>
		<circle className="st9" cx="306.4" cy="156.6" r="0.6"/>
		<circle className="st9" cx="307.9" cy="156.6" r="0.6"/>
		<circle className="st9" cx="309.5" cy="156.6" r="0.6"/>
		<circle className="st9" cx="311" cy="156.6" r="0.6"/>
		<circle className="st9" cx="312.6" cy="156.6" r="0.6"/>
		<circle className="st9" cx="314.1" cy="156.6" r="0.6"/>
		<circle className="st9" cx="315.7" cy="156.6" r="0.6"/>
		<circle className="st9" cx="317.3" cy="156.6" r="0.6"/>
		<circle className="st9" cx="318.8" cy="156.6" r="0.6"/>
		<circle className="st9" cx="320.4" cy="156.6" r="0.6"/>
		<circle className="st9" cx="321.9" cy="156.6" r="0.6"/>
		<circle className="st9" cx="323.5" cy="156.6" r="0.6"/>
		<circle className="st9" cx="325" cy="156.6" r="0.6"/>
		<circle className="st9" cx="326.6" cy="156.6" r="0.6"/>
		<circle className="st9" cx="293.9" cy="155.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="155.2" r="0.6"/>
		<circle className="st9" cx="297" cy="155.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="155.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="155.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="155.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="155.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="155.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="155.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="155.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="155.2" r="0.6"/>
		<circle className="st9" cx="311" cy="155.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="155.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="155.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="155.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="155.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="155.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="155.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="155.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="155.2" r="0.6"/>
		<circle className="st9" cx="325" cy="155.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="155.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="153.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="153.8" r="0.6"/>
		<circle className="st9" cx="297" cy="153.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="153.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="153.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="153.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="153.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="153.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="153.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="153.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="153.8" r="0.6"/>
		<circle className="st9" cx="311" cy="153.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="153.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="153.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="153.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="153.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="153.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="153.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="153.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="153.8" r="0.6"/>
		<circle className="st9" cx="325" cy="153.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="153.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="152.3" r="0.6"/>
		<circle className="st9" cx="295.5" cy="152.3" r="0.6"/>
		<circle className="st9" cx="297" cy="152.3" r="0.6"/>
		<circle className="st9" cx="298.6" cy="152.3" r="0.6"/>
		<circle className="st9" cx="300.1" cy="152.3" r="0.6"/>
		<circle className="st9" cx="301.7" cy="152.3" r="0.6"/>
		<circle className="st9" cx="303.2" cy="152.3" r="0.6"/>
		<circle className="st9" cx="304.8" cy="152.3" r="0.6"/>
		<circle className="st9" cx="306.4" cy="152.3" r="0.6"/>
		<circle className="st9" cx="307.9" cy="152.3" r="0.6"/>
		<circle className="st9" cx="309.5" cy="152.3" r="0.6"/>
		<circle className="st9" cx="311" cy="152.3" r="0.6"/>
		<circle className="st9" cx="312.6" cy="152.3" r="0.6"/>
		<circle className="st9" cx="314.1" cy="152.3" r="0.6"/>
		<circle className="st9" cx="315.7" cy="152.3" r="0.6"/>
		<circle className="st9" cx="317.3" cy="152.3" r="0.6"/>
		<circle className="st9" cx="318.8" cy="152.3" r="0.6"/>
		<circle className="st9" cx="320.4" cy="152.3" r="0.6"/>
		<circle className="st9" cx="321.9" cy="152.3" r="0.6"/>
		<circle className="st9" cx="323.5" cy="152.3" r="0.6"/>
		<circle className="st9" cx="325" cy="152.3" r="0.6"/>
		<circle className="st9" cx="326.6" cy="152.3" r="0.6"/>
		<circle className="st9" cx="293.9" cy="150.9" r="0.6"/>
		<circle className="st9" cx="295.5" cy="150.9" r="0.6"/>
		<circle className="st9" cx="297" cy="150.9" r="0.6"/>
		<circle className="st9" cx="298.6" cy="150.9" r="0.6"/>
		<circle className="st9" cx="300.1" cy="150.9" r="0.6"/>
		<circle className="st9" cx="301.7" cy="150.9" r="0.6"/>
		<circle className="st9" cx="303.2" cy="150.9" r="0.6"/>
		<circle className="st9" cx="304.8" cy="150.9" r="0.6"/>
		<circle className="st9" cx="306.4" cy="150.9" r="0.6"/>
		<circle className="st9" cx="307.9" cy="150.9" r="0.6"/>
		<circle className="st9" cx="309.5" cy="150.9" r="0.6"/>
		<circle className="st9" cx="311" cy="150.9" r="0.6"/>
		<circle className="st9" cx="312.6" cy="150.9" r="0.6"/>
		<circle className="st9" cx="314.1" cy="150.9" r="0.6"/>
		<circle className="st9" cx="315.7" cy="150.9" r="0.6"/>
		<circle className="st9" cx="317.3" cy="150.9" r="0.6"/>
		<circle className="st9" cx="318.8" cy="150.9" r="0.6"/>
		<circle className="st9" cx="320.4" cy="150.9" r="0.6"/>
		<circle className="st9" cx="321.9" cy="150.9" r="0.6"/>
		<circle className="st9" cx="323.5" cy="150.9" r="0.6"/>
		<circle className="st9" cx="325" cy="150.9" r="0.6"/>
		<circle className="st9" cx="326.6" cy="150.9" r="0.6"/>
		<circle className="st9" cx="293.9" cy="149.4" r="0.6"/>
		<circle className="st9" cx="295.5" cy="149.4" r="0.6"/>
		<circle className="st9" cx="297" cy="149.4" r="0.6"/>
		<circle className="st9" cx="298.6" cy="149.4" r="0.6"/>
		<circle className="st9" cx="300.1" cy="149.4" r="0.6"/>
		<circle className="st9" cx="301.7" cy="149.4" r="0.6"/>
		<circle className="st9" cx="303.2" cy="149.4" r="0.6"/>
		<circle className="st9" cx="304.8" cy="149.4" r="0.6"/>
		<circle className="st9" cx="306.4" cy="149.4" r="0.6"/>
		<circle className="st9" cx="307.9" cy="149.4" r="0.6"/>
		<circle className="st9" cx="309.5" cy="149.4" r="0.6"/>
		<circle className="st9" cx="311" cy="149.4" r="0.6"/>
		<circle className="st9" cx="312.6" cy="149.4" r="0.6"/>
		<circle className="st9" cx="314.1" cy="149.4" r="0.6"/>
		<circle className="st9" cx="315.7" cy="149.4" r="0.6"/>
		<circle className="st9" cx="317.3" cy="149.4" r="0.6"/>
		<circle className="st9" cx="318.8" cy="149.4" r="0.6"/>
		<circle className="st9" cx="320.4" cy="149.4" r="0.6"/>
		<circle className="st9" cx="321.9" cy="149.4" r="0.6"/>
		<circle className="st9" cx="323.5" cy="149.4" r="0.6"/>
		<circle className="st9" cx="325" cy="149.4" r="0.6"/>
		<circle className="st9" cx="326.6" cy="149.4" r="0.6"/>
		<circle className="st9" cx="293.9" cy="148" r="0.6"/>
		<circle className="st9" cx="295.5" cy="148" r="0.6"/>
		<circle className="st9" cx="297" cy="148" r="0.6"/>
		<circle className="st9" cx="298.6" cy="148" r="0.6"/>
		<circle className="st9" cx="300.1" cy="148" r="0.6"/>
		<circle className="st9" cx="301.7" cy="148" r="0.6"/>
		<circle className="st9" cx="303.2" cy="148" r="0.6"/>
		<circle className="st9" cx="304.8" cy="148" r="0.6"/>
		<circle className="st9" cx="306.4" cy="148" r="0.6"/>
		<circle className="st9" cx="307.9" cy="148" r="0.6"/>
		<circle className="st9" cx="309.5" cy="148" r="0.6"/>
		<circle className="st9" cx="311" cy="148" r="0.6"/>
		<circle className="st9" cx="312.6" cy="148" r="0.6"/>
		<circle className="st9" cx="314.1" cy="148" r="0.6"/>
		<circle className="st9" cx="315.7" cy="148" r="0.6"/>
		<circle className="st9" cx="317.3" cy="148" r="0.6"/>
		<circle className="st9" cx="318.8" cy="148" r="0.6"/>
		<circle className="st9" cx="320.4" cy="148" r="0.6"/>
		<circle className="st9" cx="321.9" cy="148" r="0.6"/>
		<circle className="st9" cx="323.5" cy="148" r="0.6"/>
		<circle className="st9" cx="325" cy="148" r="0.6"/>
		<circle className="st9" cx="326.6" cy="148" r="0.6"/>
		<circle className="st9" cx="293.9" cy="146.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="146.5" r="0.6"/>
		<circle className="st9" cx="297" cy="146.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="146.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="146.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="146.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="146.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="146.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="146.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="146.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="146.5" r="0.6"/>
		<circle className="st9" cx="311" cy="146.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="146.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="146.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="146.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="146.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="146.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="146.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="146.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="146.5" r="0.6"/>
		<circle className="st9" cx="325" cy="146.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="146.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="145.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="145.1" r="0.6"/>
		<circle className="st9" cx="297" cy="145.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="145.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="145.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="145.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="145.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="145.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="145.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="145.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="145.1" r="0.6"/>
		<circle className="st9" cx="311" cy="145.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="145.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="145.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="145.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="145.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="145.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="145.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="145.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="145.1" r="0.6"/>
		<circle className="st9" cx="325" cy="145.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="145.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="143.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="143.7" r="0.6"/>
		<circle className="st9" cx="297" cy="143.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="143.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="143.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="143.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="143.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="143.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="143.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="143.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="143.7" r="0.6"/>
		<circle className="st9" cx="311" cy="143.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="143.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="143.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="143.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="143.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="143.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="143.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="143.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="143.7" r="0.6"/>
		<circle className="st9" cx="325" cy="143.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="143.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="142.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="142.2" r="0.6"/>
		<circle className="st9" cx="297" cy="142.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="142.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="142.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="142.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="142.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="142.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="142.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="142.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="142.2" r="0.6"/>
		<circle className="st9" cx="311" cy="142.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="142.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="142.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="142.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="142.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="142.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="142.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="142.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="142.2" r="0.6"/>
		<circle className="st9" cx="325" cy="142.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="142.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="140.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="140.8" r="0.6"/>
		<circle className="st9" cx="297" cy="140.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="140.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="140.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="140.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="140.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="140.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="140.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="140.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="140.8" r="0.6"/>
		<circle className="st9" cx="311" cy="140.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="140.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="140.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="140.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="140.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="140.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="140.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="140.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="140.8" r="0.6"/>
		<circle className="st9" cx="325" cy="140.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="140.8" r="0.6"/>
		<circle className="st9" cx="293.9" cy="139.3" r="0.6"/>
		<circle className="st9" cx="295.5" cy="139.3" r="0.6"/>
		<circle className="st9" cx="297" cy="139.3" r="0.6"/>
		<circle className="st9" cx="298.6" cy="139.3" r="0.6"/>
		<circle className="st9" cx="300.1" cy="139.3" r="0.6"/>
		<circle className="st9" cx="301.7" cy="139.3" r="0.6"/>
		<circle className="st9" cx="303.2" cy="139.3" r="0.6"/>
		<circle className="st9" cx="304.8" cy="139.3" r="0.6"/>
		<circle className="st9" cx="306.4" cy="139.3" r="0.6"/>
		<circle className="st9" cx="307.9" cy="139.3" r="0.6"/>
		<circle className="st9" cx="309.5" cy="139.3" r="0.6"/>
		<circle className="st9" cx="311" cy="139.3" r="0.6"/>
		<circle className="st9" cx="312.6" cy="139.3" r="0.6"/>
		<circle className="st9" cx="314.1" cy="139.3" r="0.6"/>
		<circle className="st9" cx="315.7" cy="139.3" r="0.6"/>
		<circle className="st9" cx="317.3" cy="139.3" r="0.6"/>
		<circle className="st9" cx="318.8" cy="139.3" r="0.6"/>
		<circle className="st9" cx="320.4" cy="139.3" r="0.6"/>
		<circle className="st9" cx="321.9" cy="139.3" r="0.6"/>
		<circle className="st9" cx="323.5" cy="139.3" r="0.6"/>
		<circle className="st9" cx="325" cy="139.3" r="0.6"/>
		<circle className="st9" cx="326.6" cy="139.3" r="0.6"/>
		<circle className="st9" cx="293.9" cy="137.9" r="0.6"/>
		<circle className="st9" cx="295.5" cy="137.9" r="0.6"/>
		<circle className="st9" cx="297" cy="137.9" r="0.6"/>
		<circle className="st9" cx="298.6" cy="137.9" r="0.6"/>
		<circle className="st9" cx="300.1" cy="137.9" r="0.6"/>
		<circle className="st9" cx="301.7" cy="137.9" r="0.6"/>
		<circle className="st9" cx="303.2" cy="137.9" r="0.6"/>
		<circle className="st9" cx="304.8" cy="137.9" r="0.6"/>
		<circle className="st9" cx="306.4" cy="137.9" r="0.6"/>
		<circle className="st9" cx="307.9" cy="137.9" r="0.6"/>
		<circle className="st9" cx="309.5" cy="137.9" r="0.6"/>
		<circle className="st9" cx="311" cy="137.9" r="0.6"/>
		<circle className="st9" cx="312.6" cy="137.9" r="0.6"/>
		<circle className="st9" cx="314.1" cy="137.9" r="0.6"/>
		<circle className="st9" cx="315.7" cy="137.9" r="0.6"/>
		<circle className="st9" cx="317.3" cy="137.9" r="0.6"/>
		<circle className="st9" cx="318.8" cy="137.9" r="0.6"/>
		<circle className="st9" cx="320.4" cy="137.9" r="0.6"/>
		<circle className="st9" cx="321.9" cy="137.9" r="0.6"/>
		<circle className="st9" cx="323.5" cy="137.9" r="0.6"/>
		<circle className="st9" cx="325" cy="137.9" r="0.6"/>
		<circle className="st9" cx="326.6" cy="137.9" r="0.6"/>
		<circle className="st9" cx="293.9" cy="136.5" r="0.6"/>
		<circle className="st9" cx="295.5" cy="136.5" r="0.6"/>
		<circle className="st9" cx="297" cy="136.5" r="0.6"/>
		<circle className="st9" cx="298.6" cy="136.5" r="0.6"/>
		<circle className="st9" cx="300.1" cy="136.5" r="0.6"/>
		<circle className="st9" cx="301.7" cy="136.5" r="0.6"/>
		<circle className="st9" cx="303.2" cy="136.5" r="0.6"/>
		<circle className="st9" cx="304.8" cy="136.5" r="0.6"/>
		<circle className="st9" cx="306.4" cy="136.5" r="0.6"/>
		<circle className="st9" cx="307.9" cy="136.5" r="0.6"/>
		<circle className="st9" cx="309.5" cy="136.5" r="0.6"/>
		<circle className="st9" cx="311" cy="136.5" r="0.6"/>
		<circle className="st9" cx="312.6" cy="136.5" r="0.6"/>
		<circle className="st9" cx="314.1" cy="136.5" r="0.6"/>
		<circle className="st9" cx="315.7" cy="136.5" r="0.6"/>
		<circle className="st9" cx="317.3" cy="136.5" r="0.6"/>
		<circle className="st9" cx="318.8" cy="136.5" r="0.6"/>
		<circle className="st9" cx="320.4" cy="136.5" r="0.6"/>
		<circle className="st9" cx="321.9" cy="136.5" r="0.6"/>
		<circle className="st9" cx="323.5" cy="136.5" r="0.6"/>
		<circle className="st9" cx="325" cy="136.5" r="0.6"/>
		<circle className="st9" cx="326.6" cy="136.5" r="0.6"/>
		<circle className="st9" cx="293.9" cy="135" r="0.6"/>
		<circle className="st9" cx="295.5" cy="135" r="0.6"/>
		<circle className="st9" cx="297" cy="135" r="0.6"/>
		<circle className="st9" cx="298.6" cy="135" r="0.6"/>
		<circle className="st9" cx="300.1" cy="135" r="0.6"/>
		<circle className="st9" cx="301.7" cy="135" r="0.6"/>
		<circle className="st9" cx="303.2" cy="135" r="0.6"/>
		<circle className="st9" cx="304.8" cy="135" r="0.6"/>
		<circle className="st9" cx="306.4" cy="135" r="0.6"/>
		<circle className="st9" cx="307.9" cy="135" r="0.6"/>
		<circle className="st9" cx="309.5" cy="135" r="0.6"/>
		<circle className="st9" cx="311" cy="135" r="0.6"/>
		<circle className="st9" cx="312.6" cy="135" r="0.6"/>
		<circle className="st9" cx="314.1" cy="135" r="0.6"/>
		<circle className="st9" cx="315.7" cy="135" r="0.6"/>
		<circle className="st9" cx="317.3" cy="135" r="0.6"/>
		<circle className="st9" cx="318.8" cy="135" r="0.6"/>
		<circle className="st9" cx="320.4" cy="135" r="0.6"/>
		<circle className="st9" cx="321.9" cy="135" r="0.6"/>
		<circle className="st9" cx="323.5" cy="135" r="0.6"/>
		<circle className="st9" cx="325" cy="135" r="0.6"/>
		<circle className="st9" cx="326.6" cy="135" r="0.6"/>
		<circle className="st9" cx="293.9" cy="133.6" r="0.6"/>
		<circle className="st9" cx="295.5" cy="133.6" r="0.6"/>
		<circle className="st9" cx="297" cy="133.6" r="0.6"/>
		<circle className="st9" cx="298.6" cy="133.6" r="0.6"/>
		<circle className="st9" cx="300.1" cy="133.6" r="0.6"/>
		<circle className="st9" cx="301.7" cy="133.6" r="0.6"/>
		<circle className="st9" cx="303.2" cy="133.6" r="0.6"/>
		<circle className="st9" cx="304.8" cy="133.6" r="0.6"/>
		<circle className="st9" cx="306.4" cy="133.6" r="0.6"/>
		<circle className="st9" cx="307.9" cy="133.6" r="0.6"/>
		<circle className="st9" cx="309.5" cy="133.6" r="0.6"/>
		<circle className="st9" cx="311" cy="133.6" r="0.6"/>
		<circle className="st9" cx="312.6" cy="133.6" r="0.6"/>
		<circle className="st9" cx="314.1" cy="133.6" r="0.6"/>
		<circle className="st9" cx="315.7" cy="133.6" r="0.6"/>
		<circle className="st9" cx="317.3" cy="133.6" r="0.6"/>
		<circle className="st9" cx="318.8" cy="133.6" r="0.6"/>
		<circle className="st9" cx="320.4" cy="133.6" r="0.6"/>
		<circle className="st9" cx="321.9" cy="133.6" r="0.6"/>
		<circle className="st9" cx="323.5" cy="133.6" r="0.6"/>
		<circle className="st9" cx="325" cy="133.6" r="0.6"/>
		<circle className="st9" cx="326.6" cy="133.6" r="0.6"/>
		<circle className="st9" cx="293.9" cy="132.1" r="0.6"/>
		<circle className="st9" cx="295.5" cy="132.1" r="0.6"/>
		<circle className="st9" cx="297" cy="132.1" r="0.6"/>
		<circle className="st9" cx="298.6" cy="132.1" r="0.6"/>
		<circle className="st9" cx="300.1" cy="132.1" r="0.6"/>
		<circle className="st9" cx="301.7" cy="132.1" r="0.6"/>
		<circle className="st9" cx="303.2" cy="132.1" r="0.6"/>
		<circle className="st9" cx="304.8" cy="132.1" r="0.6"/>
		<circle className="st9" cx="306.4" cy="132.1" r="0.6"/>
		<circle className="st9" cx="307.9" cy="132.1" r="0.6"/>
		<circle className="st9" cx="309.5" cy="132.1" r="0.6"/>
		<circle className="st9" cx="311" cy="132.1" r="0.6"/>
		<circle className="st9" cx="312.6" cy="132.1" r="0.6"/>
		<circle className="st9" cx="314.1" cy="132.1" r="0.6"/>
		<circle className="st9" cx="315.7" cy="132.1" r="0.6"/>
		<circle className="st9" cx="317.3" cy="132.1" r="0.6"/>
		<circle className="st9" cx="318.8" cy="132.1" r="0.6"/>
		<circle className="st9" cx="320.4" cy="132.1" r="0.6"/>
		<circle className="st9" cx="321.9" cy="132.1" r="0.6"/>
		<circle className="st9" cx="323.5" cy="132.1" r="0.6"/>
		<circle className="st9" cx="325" cy="132.1" r="0.6"/>
		<circle className="st9" cx="326.6" cy="132.1" r="0.6"/>
		<circle className="st9" cx="293.9" cy="130.7" r="0.6"/>
		<circle className="st9" cx="295.5" cy="130.7" r="0.6"/>
		<circle className="st9" cx="297" cy="130.7" r="0.6"/>
		<circle className="st9" cx="298.6" cy="130.7" r="0.6"/>
		<circle className="st9" cx="300.1" cy="130.7" r="0.6"/>
		<circle className="st9" cx="301.7" cy="130.7" r="0.6"/>
		<circle className="st9" cx="303.2" cy="130.7" r="0.6"/>
		<circle className="st9" cx="304.8" cy="130.7" r="0.6"/>
		<circle className="st9" cx="306.4" cy="130.7" r="0.6"/>
		<circle className="st9" cx="307.9" cy="130.7" r="0.6"/>
		<circle className="st9" cx="309.5" cy="130.7" r="0.6"/>
		<circle className="st9" cx="311" cy="130.7" r="0.6"/>
		<circle className="st9" cx="312.6" cy="130.7" r="0.6"/>
		<circle className="st9" cx="314.1" cy="130.7" r="0.6"/>
		<circle className="st9" cx="315.7" cy="130.7" r="0.6"/>
		<circle className="st9" cx="317.3" cy="130.7" r="0.6"/>
		<circle className="st9" cx="318.8" cy="130.7" r="0.6"/>
		<circle className="st9" cx="320.4" cy="130.7" r="0.6"/>
		<circle className="st9" cx="321.9" cy="130.7" r="0.6"/>
		<circle className="st9" cx="323.5" cy="130.7" r="0.6"/>
		<circle className="st9" cx="325" cy="130.7" r="0.6"/>
		<circle className="st9" cx="326.6" cy="130.7" r="0.6"/>
		<circle className="st9" cx="293.9" cy="129.2" r="0.6"/>
		<circle className="st9" cx="295.5" cy="129.2" r="0.6"/>
		<circle className="st9" cx="297" cy="129.2" r="0.6"/>
		<circle className="st9" cx="298.6" cy="129.2" r="0.6"/>
		<circle className="st9" cx="300.1" cy="129.2" r="0.6"/>
		<circle className="st9" cx="301.7" cy="129.2" r="0.6"/>
		<circle className="st9" cx="303.2" cy="129.2" r="0.6"/>
		<circle className="st9" cx="304.8" cy="129.2" r="0.6"/>
		<circle className="st9" cx="306.4" cy="129.2" r="0.6"/>
		<circle className="st9" cx="307.9" cy="129.2" r="0.6"/>
		<circle className="st9" cx="309.5" cy="129.2" r="0.6"/>
		<circle className="st9" cx="311" cy="129.2" r="0.6"/>
		<circle className="st9" cx="312.6" cy="129.2" r="0.6"/>
		<circle className="st9" cx="314.1" cy="129.2" r="0.6"/>
		<circle className="st9" cx="315.7" cy="129.2" r="0.6"/>
		<circle className="st9" cx="317.3" cy="129.2" r="0.6"/>
		<circle className="st9" cx="318.8" cy="129.2" r="0.6"/>
		<circle className="st9" cx="320.4" cy="129.2" r="0.6"/>
		<circle className="st9" cx="321.9" cy="129.2" r="0.6"/>
		<circle className="st9" cx="323.5" cy="129.2" r="0.6"/>
		<circle className="st9" cx="325" cy="129.2" r="0.6"/>
		<circle className="st9" cx="326.6" cy="129.2" r="0.6"/>
		<circle className="st9" cx="293.9" cy="127.8" r="0.6"/>
		<circle className="st9" cx="295.5" cy="127.8" r="0.6"/>
		<circle className="st9" cx="297" cy="127.8" r="0.6"/>
		<circle className="st9" cx="298.6" cy="127.8" r="0.6"/>
		<circle className="st9" cx="300.1" cy="127.8" r="0.6"/>
		<circle className="st9" cx="301.7" cy="127.8" r="0.6"/>
		<circle className="st9" cx="303.2" cy="127.8" r="0.6"/>
		<circle className="st9" cx="304.8" cy="127.8" r="0.6"/>
		<circle className="st9" cx="306.4" cy="127.8" r="0.6"/>
		<circle className="st9" cx="307.9" cy="127.8" r="0.6"/>
		<circle className="st9" cx="309.5" cy="127.8" r="0.6"/>
		<circle className="st9" cx="311" cy="127.8" r="0.6"/>
		<circle className="st9" cx="312.6" cy="127.8" r="0.6"/>
		<circle className="st9" cx="314.1" cy="127.8" r="0.6"/>
		<circle className="st9" cx="315.7" cy="127.8" r="0.6"/>
		<circle className="st9" cx="317.3" cy="127.8" r="0.6"/>
		<circle className="st9" cx="318.8" cy="127.8" r="0.6"/>
		<circle className="st9" cx="320.4" cy="127.8" r="0.6"/>
		<circle className="st9" cx="321.9" cy="127.8" r="0.6"/>
		<circle className="st9" cx="323.5" cy="127.8" r="0.6"/>
		<circle className="st9" cx="325" cy="127.8" r="0.6"/>
		<circle className="st9" cx="326.6" cy="127.8" r="0.6"/>
</g>
          </svg>
        </ReactSVGPanZoom>
      </div>
    );
  }
}

export default Zoom;
