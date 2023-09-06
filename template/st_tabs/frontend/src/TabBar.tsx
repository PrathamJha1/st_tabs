import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ComponentProps } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import "./customstyling.css"
interface Tab {
  label: string
}

interface State {
  activeTab: number
  tabs: Array<String>
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    ":focus": {
      outline: "none",
    },
  }
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class MyComponent extends StreamlitComponentBase<State> {
  constructor(props: ComponentProps<any>) {
    super(props)
    console.log(props)
  }

  state: State = {
    activeTab: this.props.args.default,
    tabs: this.props.args.tabs,
  }

  setActiveTab = (activeTab: number) => {
    this.setState({ activeTab })
  }
  render() {
    const { activeTab } = this.state
    const background = this.props.args.styles[0]? this.props.args.styles[0] : this.props.theme?.backgroundColor
    const fontWeight = this.props.args?.styles
      ? this.props.args.styles[1]
      : "200"
    const color = this.props.args?.styles? this.props.args.styles[2] : ""
    const activeColor = this.props.args?.styles? this.props.args.styles[3] : ""
    const fontSize = this.props.args?.styles
      ? this.props.args.styles[4]
      : "20px"

   

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider",background: background}}>
          <Tabs
            sx={{
              color: color,
              "& .MuiTabs-indicator":{
                backgroundColor: activeColor
              }
            }}
            value={activeTab}
            onChange={(event: React.SyntheticEvent, newValue: number) => {
              this.setState(
                (state) => {
                  return { activeTab: newValue }
                },
                () => Streamlit.setComponentValue(newValue)
              )
            }}
            aria-label="basic tabs example"
          >
            {this.props.args.tabs.map((tab: Tab, index: number) => {
              return (
                <Tab
                  wrapped={true}
                  label={tab}
                  {...a11yProps(index)}
                  className="tab"
                  sx={{
                    font:"initial",
                    color:color,
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                    fontFamily:"system-ui",
                    "&.Mui-selected":{
                      color:activeColor
                    }
                  }}
                />
              )
            })}
          </Tabs>
        </Box>
      </Box>
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(MyComponent)
